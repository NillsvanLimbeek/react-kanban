import express from 'express';

import { errorHandler } from '../src/handlers/errorHandler';

// load routes
import boards from './routes/boards';
import columns from './routes/columns';

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/boards', boards);
app.use('/columns', columns);

// handlers
app.use(errorHandler);

export default app;
