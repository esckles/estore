import sellerModel from "../model/sellerModel";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import crypto from "crypto";

export const createSeller = async (req: Request, res: Response) => {
  try {
    const { email, password, userName, storeName } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const token = crypto.randomBytes(3).toString("hex");

    const user = await sellerModel.create({
      email,
      password: hashed,
      userName,
      storeName,
      platformID: token,
      status: "seller",
    });
    return res.status(201).json({
      message: "seller created",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating",
    });
  }
};
export const createDispatcher = async (req: Request, res: Response) => {
  try {
    const { email, password, userName, storeName } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const token = crypto.randomBytes(3).toString("hex");

    const user = await sellerModel.create({
      email,
      password: hashed,
      userName,
      storeName,
      platformID: token,
    });
    return res.status(201).json({
      message: "seller created",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating",
    });
  }
};
export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await sellerModel.findOne({
      email,
    });
    if (user) {
      const pass = await bcrypt.compare(password, user?.password);
      if (pass) {
        return res.status(201).json({
          message: "Welcome back",
          data: user,
          status: 201,
        });
      } else {
        return res.status(404).json({ message: "password not correct" });
      }
    } else
      res.status(201).json({
        message: "Email not found",
        data: user,
        status: 201,
      });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating",
    });
  }
};
