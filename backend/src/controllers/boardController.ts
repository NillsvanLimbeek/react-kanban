import { Request, Response, NextFunction } from 'express';

import { ErrorResponse } from './../utils/errorResponse';
import Board from '../models/Board';

async function getBoards(req: Request, res: Response) {
    const boards = await Board.find();

    res.json({ succes: true, count: boards.length, data: boards });
}

async function getBoard(req: Request, res: Response, next: NextFunction) {
    const board = await Board.findById(req.params.id);

    if (!board) {
        return next(
            new ErrorResponse(
                `Board not found with an id of ${req.params.id}`,
                404,
            ),
        );
    }

    res.json({ succes: true, data: board });
}

async function createBoard(req: Request, res: Response) {
    const board = await Board.create(req.body);

    res.json({ succes: true, data: board });
}

async function updateBoard(req: Request, res: Response) {
    const board = await Board.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.json({ succes: true, data: board });
}

async function deleteBoard(req: Request, res: Response) {
    res.json({ succes: true, data: 'Deleted board' });
}

export { getBoards, getBoard, createBoard, updateBoard, deleteBoard };
