import express from 'express';
import colors from 'colors';

export const LoggerMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let method: string = req.method.toUpperCase();
    let PADDING: number = 8;

    switch (method) {
        case 'OPTION':
            method = colors.grey(method);
            break;
        case 'GET':
            method = colors.blue(method);
            break;
        case 'POST':
            method = colors.yellow(method);
            break;
        case 'PUT':
            method = colors.yellow(method);
            break;
        case 'DELETE':
            method = colors.red(method);
            break;
        case 'PATCH':
            method = colors.magenta(method);
            break;
        case 'HEAD':
            method = colors.cyan(method);
            break;
        default:
            method = colors.blue(method);
            break;
    }

    console.log(`[ ${ method } ] ${ req.path }`);
    next();
}