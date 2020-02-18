import express from 'express';

export const verificationMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    next();
}