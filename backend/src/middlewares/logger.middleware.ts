import express from 'express';
import colors from 'colors';

export const LoggerMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let method: string = req.method.toUpperCase();
    let PADDING: number = 7;

    switch (method) {
        case 'OPTION':
            method = colors.grey(method.padEnd(PADDING));
            break;
        case 'GET':
            method = colors.blue(method.padEnd(PADDING));
            break;
        case 'POST':
            method = colors.yellow(method.padEnd(PADDING));
            break;
        case 'PUT':
            method = colors.yellow(method.padEnd(PADDING));
            break;
        case 'DELETE':
            method = colors.red(method.padEnd(PADDING));
            break;
        case 'PATCH':
            method = colors.magenta(method.padEnd(PADDING));
            break;
        case 'HEAD':
            method = colors.cyan(method.padEnd(PADDING));
            break;
        default:
            method = colors.blue(method.padEnd(PADDING));
            break;
    }

    console.log(`${ method }${ req.path }`);
    next();
}