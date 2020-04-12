import express, { Request, Response } from 'express';
import { asyncHandler } from '../handlers/asyncHandler';
import {
    getBoards,
    getBoard,
    createBoard,
    updateBoard,
    deleteBoard,
} from '../controllers/boardController';

const router = express.Router();

router.get('/', asyncHandler(getBoards));
router.get('/:id', asyncHandler(getBoard));

router.post('/', asyncHandler(createBoard));

router.put('/:id', asyncHandler(updateBoard));

router.delete('/:id', asyncHandler(deleteBoard));

export default router;
