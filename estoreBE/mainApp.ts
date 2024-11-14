import { Application, Request, Response } from "express";

export const mainApp = async (app: Application) => {
  try {
    app.use("/", (req: Request, res: Response) => {
      try {
        res.json({ message: "Welcome to the default API" });
      } catch (error) {
        return res.status(404).json({ message: "Error read path" });
      }
    });
  } catch (error) {
    return error;
  }
};
