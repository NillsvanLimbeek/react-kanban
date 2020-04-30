import express from 'express';

import { asyncHandler } from '../handlers/asyncHandler';
import {
    getColumns,
    getColumn,
    createColumn,
} from '../controllers/columnController';

const router = express.Router();

router.get('/', asyncHandler(getColumns));
router.get('/:id', asyncHandler(getColumn));

router.post('/', asyncHandler(createColumn));

export default router;
