import { Request } from "express";
import { User } from "../models/User";

export const context = async ({ req }: Record<string, Request>) => {
  const token = req.headers.authorization;
  if (!token) {
    return { user: null };
  }
  const user = await User.findOne({ token });
  return { user };
};
