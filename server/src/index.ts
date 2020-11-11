require("dotenv").config();

import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { connectDatabase } from "./database";
import { typeDefs, resolvers } from "./graphql";

const port = 9000;

async function mount(app: Application) {
    const db = await connectDatabase();


    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req, res }) => ({ db, req, res }),
    });
    server.applyMiddleware({ app, path: "/" });

    app.listen(port, "192.168.0.22");

    console.log(`[app]: http://localhost:${port}`);
}

mount(express());