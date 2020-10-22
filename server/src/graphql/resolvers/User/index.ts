import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Database, User } from "../../../lib/types";

export const userResolvers: IResolvers = {
  Query: {
    users: async (_root: undefined, _args: {}, { db }: { db: Database }) => {
      return await db.users.find({}).toArray();
    }
  },
  Mutation: {
    deleteUser: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ) => {
      const deleteRes = await db.users.findOneAndDelete({
        _id: new ObjectId(id)
      });

      if (!deleteRes.value) {
        throw new Error("failed to delete user");
      }

      return deleteRes.value;
    }
  },
  Place: {
    id: (user: User): string => user._id.toString()
  }
};