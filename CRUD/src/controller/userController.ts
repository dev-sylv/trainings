import userModel from "../model/userModel";
import { Request, Response } from "express";

//get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();

    return res.status(200).json({
      message: "gotten",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all users",
      data: error,
    });
  }
};
