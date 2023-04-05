import { Schema, model, Types } from "mongoose";

interface IMovie {
    plot: string;
    genres: string[];
    runtime: number;
    cast: string[];
    num_mflix_comments: number;
    poster: string;
    title: string;
    fullplot: string;
    countries: string[];
    released: number;
    directors: string[];
    writers: string[];
    awards: {};
    lastupdated: number;
    year: number;
    imdb: {};
    type: string;
    tomatoes: {};
}

const movieSchema = new Schema<IMovie>({
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
},{timestamps: true});

const Movie = model<IMovie>("movies", movieSchema);

export default Movie;
