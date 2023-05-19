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

//make search

export const searchUser = async (req: Request, res: Response) => {
  try {
    const search = await userModel.find(req.query).sort({ name: 1 });

    return res.status(200).json({
      message: "search gotten",
      data: search,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to search for users",
      data: error,
    });
  }
};

// Get one users:
export const getoneUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.findById(req.params.userID);

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
