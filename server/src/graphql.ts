import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull, 
} from "graphql";
import { places } from './places'

const Place = new GraphQLObjectType({
  name: "Place",
  fields: {
    id: {type: GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    price: {type: GraphQLInt},
    tags: {type: GraphQLList(GraphQLString)},
  }
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    places: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(Place))),
      resolve: () => {
        return places;
      }
    }
  }
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deletePlace: {
      type: GraphQLNonNull(Place),
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve: (_root, { id }) => {
        for (let i = 0; i < places.length; i++) {
          if (places[i].id === id) {
            return places.splice(i, 1)[0];
          }
        }

        throw new Error("failed to deleted listing");
      }
    }
  }
});

export const schema = new GraphQLSchema({ query, mutation });