"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_controller_1 = require("../controllers/movie.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/movies", movie_controller_1.getAll).post("/movie/:id", movie_controller_1.getOne);
exports.default = route;
