import express, { Application } from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";

class App {
  public express: Application;
  public conn: any;

  public constructor() {
    process.env.TZ = "America";
    this.express = express();

    this.middlewares();
    this.routes();
    this.database();
  }

  private middlewares(): void {
    this.express.use(express.json({ limit: "10MB" }));
    this.express.use(cors());
  }

  private async database() {
    try {
      mongoose.set("strictQuery", true);
      await mongoose.connect("mongodb://0.0.0.0:27017/app-financas");
      console.log("Connect database success");
    } catch (err) {
      console.error("Connect database fail, error: ", err);
    }
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
