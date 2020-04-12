import express from 'express';

import { errorHandler } from '../src/handlers/errorHandler';

// load routes
import boards from './routes/boards';

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/boards', boards);

// handlers
app.use(errorHandler);

export default app;
