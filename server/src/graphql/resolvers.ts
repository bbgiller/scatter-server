import { places } from "../places";
import { IResolvers } from "apollo-server-express";


export const resolvers: IResolvers = {
  Query: {
    places: () => {
      return places;
    }
  },
  Mutation: {
    deletePlace: (_root: undefined, { id }: { id: string }) => {
      for (let i = 0; i < places.length; i++) {
        if (places[i].id === id) {
          return places.splice(i, 1)[0];
        }
      }

      throw new Error("failed to deleted place");
    }
  }
};