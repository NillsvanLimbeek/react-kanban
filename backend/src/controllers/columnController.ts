import { Request, Response, NextFunction } from 'express';

import { ErrorResponse } from '../utils/ErrorResponse';
import Column from '../models/Column';

async function getColumns(req: Request, res: Response, next: NextFunction) {
    const columns = await Column.find();

    res.status(200).json({
        success: true,
        count: columns.length,
        data: columns,
    });
}

async function getColumn(req: Request, res: Response, next: NextFunction) {
    const column = await Column.findById(req.params.id);

    if (!column) {
        return new ErrorResponse(
            `Column not found with an id of ${req.params.id}`,
            404,
        );
    }

    res.status(200).json({
        success: true,
        data: column,
    });
}

async function createColumn(req: Request, res: Response, next: NextFunction) {
    const column = await Column.create(req.body);

    res.status(201).json({
        success: true,
        data: column,
    });
}

export { getColumns, getColumn, createColumn };
