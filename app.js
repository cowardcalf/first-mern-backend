// app.js
// const express = require("express");
// const connectDB = require("./config/db");

import express from "express";
import connectDB from "./config/db.js";
import books from "./routes/api/books.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

// Connect Database
connectDB(process.env.MONGODB_URI);

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/books", books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
