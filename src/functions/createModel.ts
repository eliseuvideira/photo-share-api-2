import { Document, model, Model, Schema } from "mongoose";

export const createModel = <T>(
  name: string,
  schema: Schema<Document<T>, Model<Document<T>>, T>
) => model(name, schema);
