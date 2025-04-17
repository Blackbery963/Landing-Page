import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './db/index.js';
import { app } from './app.js'

// Initialize dotenv
dotenv.config({
  path: './.env'
});

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Adjust the port if necessary
  credentials: true,
}));

app.use(express.json()); // Middleware to parse JSON data
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data

// Connect to the database
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('MONGODB connection failed !!', err);
  });