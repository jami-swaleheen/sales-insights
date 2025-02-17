import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../types';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  console.error(err.stack);

  res.status(500).json({
    message: err.message || 'Internal Server Error',
    status: 500
  });
} 