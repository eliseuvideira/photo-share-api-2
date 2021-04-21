import { ApolloServer } from "apollo-server-express";
import { readdirSync } from "fs";
import { join } from "path";
import { merge } from "lodash";

const typeDefs = [];
const typesDefsFiles = readdirSync(join(__dirname, "typeDefs"));
for (const file of typesDefsFiles) {
  const item = require(join(__dirname, "typeDefs", file)).typeDefs;
  typeDefs.push(item);
}

const resolversArr = [];
const resolversFiles = readdirSync(join(__dirname, "resolvers"));
for (const file of resolversFiles) {
  const item = require(join(__dirname, "resolvers", file)).resolvers;
  resolversArr.push(item);
}
const resolvers = merge(resolversArr);

const contextArr: any[] = [];
const contextFiles = readdirSync(join(__dirname, "contexts"));
for (const file of contextFiles) {
  const item = require(join(__dirname, "contexts", file)).context;
  contextArr.push(item);
}
const context = async (...args: any[]) =>
  merge({}, ...(await Promise.all(contextArr.map((item) => item(...args)))));

const apolloServer = new ApolloServer({ typeDefs, resolvers, context });

const apollo = apolloServer.getMiddleware();

export default apollo;
