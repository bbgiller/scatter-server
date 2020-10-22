import { Collection, ObjectID } from "mongodb";

export interface Place {
  _id: ObjectID;
  name: string;
  address: string;
  price: number;
  tags: string[];
}

export interface User {
  _id: ObjectID;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  city: string;
  country: string;
  birthday: Date;
}


export interface Database {
  users: Collection<User>;
  places: Collection<Place>;

}