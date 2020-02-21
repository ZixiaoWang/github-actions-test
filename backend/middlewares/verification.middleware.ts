import express from 'express';
import path from 'path';

const whitelist: string[] = [
    '/login'
];

export const verificationMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const request: any = req;

    if (request.method.toLowerCase() === 'post' && request.path === '/login') {
        res.cookie('USER', 'user', { signed: true });
        res.status(200);
        res.send(true);
    } else {
        if (request.signedCookies['USER'] === 'user') {
            next();
        } else {
            res.status(200);
            res.sendFile(path.resolve(__dirname, '../../../statics/login.html'));
        }
    }

    // next();
}