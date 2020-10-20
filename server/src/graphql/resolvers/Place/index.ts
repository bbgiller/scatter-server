import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Database, Place } from "../../../lib/types";

export const placeResolvers: IResolvers = {
  Query: {
    places: async (_root: undefined, _args: {}, { db }: { db: Database }) => {
      return await db.places.find({}).toArray();
    }
  },
  Mutation: {
    deletePlace: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ) => {
      const deleteRes = await db.places.findOneAndDelete({
        _id: new ObjectId(id)
      });

      if (!deleteRes.value) {
        throw new Error("failed to delete place");
      }

      return deleteRes.value;
    }
  },
  Place: {
    id: (place: Place): string => place._id.toString()
  }
};