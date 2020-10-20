import merge from "lodash.merge";
// import { bookingResolvers } from "./Booking";
import { placeResolvers } from "./Place";
// import { userResolvers } from "./User";

export const resolvers = merge(placeResolvers);