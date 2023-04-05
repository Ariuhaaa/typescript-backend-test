import Movie from "../models/movie.model";
import { Request, Response } from "express";

// const create = (req: Request, res: Response) => {
//   res.json({ status: true });
// };

// const getAll = (req: Request, res: Response) => {
//   res.json({ status: true });
// };



const getAll = async (req: Request, res: Response) => {
  try {
    const result = await Movie.find().limit(10);
 
  
    res.json({ status: true, result :result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Movie.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

export { getAll, getOne };