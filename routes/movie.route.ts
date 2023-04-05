import { getOne, getAll } from "../controllers/movie.controller";

import { Router } from "express";

const route = Router();

route.get("/movies", getAll).post("/movie/:id", getOne);

export default route;