import mongoose from "mongoose";
import { user } from "../interfaces/AllInnterfaces";

interface Iuser extends user, mongoose.Document {}

const userSchema = new mongoose.Schema<user>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phoneNum: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
    },
    verified: {
      type: Boolean,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BooksCollections",
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model<Iuser>("userCollections", userSchema);

export default userModel;
