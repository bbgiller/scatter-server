import { MongoClient } from "mongodb";

const user = "bbgiller456";
const userPassword = "sVlqUgXuTNqFJaeo"; // user password
const cluster = "cluster0.swlvu";

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db("main");

  return {
    places: db.collection("test_places")
  };
};