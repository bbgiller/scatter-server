import { MongoClient } from "mongodb";
import { Database } from "../lib/types";


// const user = "bbgiller456";
// const userPassword = "sVlqUgXuTNqFJaeo"; // user password
// const cluster = "cluster0.swlvu";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db("main");

  return {
    places: db.collection("test_places"),
    users: db.collection("users")
  };
};