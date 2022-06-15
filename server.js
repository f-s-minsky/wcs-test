import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import members from './routes/members.js'; // Route files

// Load .env file content (env variables) in process.env
dotenv.config({ path: './config.env' });

// Connect to database
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Body parser
app.use(express.json());

// use of routers
app.use('/api/members', members);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
