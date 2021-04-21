import { authorize } from "../functions/authorize";
import { resolver } from "../functions/resolver";
import { User } from "../models/User";

const allUsers = resolver(() => User.find());

const user = resolver((_, { userId }) => User.findOne({ userId }));

const totalUsers = resolver(() => User.estimatedDocumentCount());

const githubAuth = resolver(async (_, { code }) => {
  const { user, token } = await authorize(
    process.env.GITHUB_CLIENT_ID || "",
    process.env.GITHUB_CLIENT_SECRET || "",
    code
  );

  await User.replaceOne({ userId: user.userId }, user, { upsert: true });

  return { user, token };
});

const me = resolver((_, args, { user }) => user);

export const resolvers = {
  Query: {
    allUsers,
    user,
    totalUsers,
    me,
  },

  Mutation: {
    githubAuth,
  },
};
