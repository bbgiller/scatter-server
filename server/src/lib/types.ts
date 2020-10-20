import { Collection, ObjectID } from "mongodb";

export interface Place {
  _id: ObjectID;
  name: string;
  address: string;
  price: number;
  tags: string[];
}

export interface Database {
  places: Collection<Place>;

}