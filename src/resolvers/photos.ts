import { AuthenticationError } from "apollo-server-errors";
import { resolver } from "../functions/resolver";
import { Photo } from "../models/Photo";
import { User } from "../models/User";

const allPhotos = resolver(() => Photo.find());

const photo = resolver((_, { photoId }) => Photo.findById(photoId));

const totalPhotos = resolver(() => Photo.estimatedDocumentCount());

const createPhoto = resolver(
  async (_, { input: { name, description, category } }, { user }) => {
    if (!user) {
      throw new AuthenticationError("Unauthorized");
    }
    const photo = await Photo.create({
      name,
      description,
      category,
      user,
    });
    return photo.toObject();
  }
);

export const resolvers = {
  Query: {
    allPhotos,
    photo,
    totalPhotos,
  },

  Mutation: {
    createPhoto,
  },

  Photo: {
    photoId: (photo: any) => photo._id.toString(),
    url: (photo: any) => `/photos/${photo._id.toString()}`,
    created: (photo: any) => photo.createdAt,
    postedBy: async (photo: any) => User.findById(photo.user),
  },
};
