import pretty from "pretty-ms";
import { resolver } from "../functions/resolver";
import { join } from "path";

const { name, version } = require(join(__dirname, "..", "..", "package.json"));

const api = resolver(() => ({ name, version }));

const uptime = resolver(() => pretty(process.uptime() * 1000));

export const resolvers = {
  Query: {
    api,
  },
  API: {
    uptime,
  },
  Mutation: {
    api,
  },
};
