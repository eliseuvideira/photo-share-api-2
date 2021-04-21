import { createModel } from "../functions/createModel";
import { createSchema } from "../functions/createSchema";

interface UserProps {
  userId: string;
  name: string;
  avatar?: string;
  token?: string;
}

export const User = createModel<UserProps>(
  "User",
  createSchema({
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    avatar: String,
    token: { type: String, unique: true },
  }),
  "users"
);
