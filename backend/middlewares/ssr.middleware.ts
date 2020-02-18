import express from 'express';

export const SSRMiddleware = (nextRequestHandler: any) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        return nextRequestHandler(req, res, req.path, req.params);
    }
}