import {
  Document,
  DocumentDefinition,
  Model,
  Schema,
  SchemaDefinition,
  SchemaOptions,
} from "mongoose";

export const createSchema = <T>(
  schema?: SchemaDefinition<DocumentDefinition<T>>,
  options?: SchemaOptions
) => new Schema<Document<T>, Model<Document<T>>, T>(schema, options);
