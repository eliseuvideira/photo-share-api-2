import { resolver } from "../functions/resolver";
import { User } from "../models/User";

const allUsers = resolver(() => User.find());

const user = resolver((_, { userId }) => User.findOne({ userId }));

const totalUsers = resolver(() => User.estimatedDocumentCount());

export const resolvers = {
  Query: {
    allUsers,
    user,
    totalUsers,
  },
};
