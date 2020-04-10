import { Request, Response, NextFunction } from 'express';

async function getBoards(req: Request, res: Response) {
    res.json({ succes: true, data: 'All boards' });
}

async function getBoard(req: Request, res: Response) {
    res.json({ succes: true, data: `Board with an id of ${req.params.id}` });
}

async function createBoard(req: Request, res: Response) {
    res.json({ succes: true, data: 'Board created' });
}

async function updateBoard(req: Request, res: Response) {
    res.json({ succes: true, data: `Updated board ${req.params.id}` });
}

async function deleteBoard(req: Request, res: Response) {
    res.json({ succes: true, data: 'Deleted board' });
}

export { getBoards, getBoard, createBoard, updateBoard, deleteBoard };
