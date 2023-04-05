"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const movie_route_1 = __importDefault(require("./routes/movie.route"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const URI = process.env.MONGO_DB_URI || "";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", movie_route_1.default);
mongoose_1.default
    .connect(URI)
    .then(() => console.log("Database successfully connected"))
    .catch((err) => console.log(err));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
