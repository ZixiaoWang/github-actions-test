import 'reflect-metadata';
import express from 'express';
import path from 'path';
import colors from 'colors';
import bodyParser from 'body-parser';
import next from 'next';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';

import { AuthRouter } from './routers';
import { LoggerMiddleware, SSRMiddleware, verificationMiddleware } from './middlewares';
import { DIBootstrap } from './di-bootstrap';
import { sessionOptions, nextOptions, interestingBanner } from './config';

const app = next(nextOptions);
const nextRequestHandler = app.getRequestHandler();
const server = express();
const port: number = Number(process.env.PORT || 8080);


(async () => {
    await app.prepare();
    DIBootstrap()

    server.use(bodyParser());
    server.use(LoggerMiddleware);
    server.use(cookieParser('SECRET'));
    server.use(cookieSession(sessionOptions));
    server.use(verificationMiddleware);
    server.use('/csr', express.static(path.resolve(__dirname, '../../frontend/dist')));
    server.use('/api/v1', AuthRouter);
    server.use('/', SSRMiddleware(nextRequestHandler));

    server.listen(port, () => {
        console.log('\n');
        console.log(colors.green(interestingBanner));
        console.log(colors.magenta('======================================='));
        console.log(`  ${ colors.green('TESTING SERVER') }`);
        console.log(`  Server is listening to ${ colors.green(port.toString()) }`);
        console.log(colors.magenta('======================================='));
    })
})()