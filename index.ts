import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import movieRoute from './routes/movie.route'
import cors from "cors"


dotenv.config();

const app = express();
const port = process.env.PORT;
const URI: string = process.env.MONGO_DB_URI || ""

app.use(cors())
app.use(express.json())
app.use("/api", movieRoute);


mongoose
  .connect(URI)
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log(err));

 

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

