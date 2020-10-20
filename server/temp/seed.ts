require("dotenv").config();

import { ObjectId } from "mongodb";
import { connectDatabase } from "../src/database";
import { Place } from "../src/lib/types";

const seed = async () => {
  try {
    console.log(`[seed] : running...`);

    const db = await connectDatabase();
     const places: Place[] = [
      {
        id: new ObjectId(),
        name: "Nara",
        address:
          "1515 Polk St",
        price: 3,
        tags: ["restaurant", "food"],
      }
    ];

    for (const place of places) {
      await db.places.insertOne(place);
    }

    console.log(`[seed] : success`);
  } catch (error) {
    throw new Error("failed to seed database");
  }
};

seed();