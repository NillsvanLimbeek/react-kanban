import express from 'express';

// load routes
import boards from './routes/boards';

const app = express();

// middleware

// routes
app.use('/boards', boards);

// handlers

export default app;
