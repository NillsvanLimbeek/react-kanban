import { Request, Response, NextFunction } from 'express';
import mongoose, { CastError } from 'mongoose';

import { ErrorResponse } from '../utils/ErrorResponse';

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    let error = { ...err, message: err.message };

    // log to console for devs
    console.log(err);

    // mongoose errors
    // cast error
    if (err.name === 'CastError') error = handleCastError(error);
    // duplicate error
    if (err.code === 11000) error = handleDuplicateError(error);
    // validation error
    if (err.name === 'ValidationError') error = handleValidationError(error);

    res.status(err.statusCode || 500).json({
        succes: false,
        msg: error.message || 'Server Error',
    });
}

// TODO move to files
function handleCastError(error: CastError) {
    const message = `Board not found with an id of ${error.value}`;
    return new ErrorResponse(message, 404);
}

function handleDuplicateError(error: any) {
    const value = Object.keys(error.keyValue)[0];

    const message = `Duplicate ${value}, please use another value`;
    return new ErrorResponse(message, 400);
}

function handleValidationError(error: any) {
    console.log(error);

    const errors = Object.values(error.errors).map((el) => el.message);

    const message = `Invalid input data. ${errors.join('. ')}`;
    return new ErrorResponse(message, 400);
}
