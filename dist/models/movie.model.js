"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    num_mflix_comments: Number,
    poster: String,
    title: String,
    fullplot: String,
    countries: [String],
    released: Number,
    directors: [String],
    writers: [String],
    awards: {
        win: Number,
        nominations: Number,
        text: String
    },
    lastupdated: Number,
    year: Number,
    imdb: {
        rating: Number,
    },
    type: String,
    tomatoes: {},
}, { timestamps: true });
const Movie = (0, mongoose_1.model)("movies", movieSchema);
exports.default = Movie;
