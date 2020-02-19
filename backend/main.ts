import 'reflect-metadata';
import express from 'express';
import path from 'path';
import colors from 'colors';
import bodyParser from 'body-parser';
import next from 'next';

import { AuthRouter } from './routers';
import { LoggerMiddleware, SSRMiddleware } from './middlewares';

import { DI } from '../frontend/src/di';
import { 
    PostService, 
    UserService, 
    CommentService, 
    FetchService 
} from '../frontend/src/services';

DI.bootstrap([
    FetchService,
    PostService,
    UserService,
    CommentService
]);

// Next Configurates
const dev: boolean = false;
const dir: string = path.resolve(__dirname, '../../frontend/src');

const app = next({ dev, dir });
const nextRequestHandler = app.getRequestHandler();
const server = express();
const port: number = Number(process.env.PORT || 8080);

(async () => {
    await app.prepare();

    server.use(bodyParser());
    server.use(LoggerMiddleware);
    server.use('/csr', express.static(path.resolve(__dirname, '../../frontend/dist')));
    server.use('/api/v1', AuthRouter);
    server.use('/', SSRMiddleware(nextRequestHandler));
    // server.use('/', (req: express.Request, res: express.Response) => res.redirect('/ui'))

    server.listen(port, () => {
        console.log('\n');
        console.log(colors.magenta('======================================='));
        console.log(`  ${ colors.green('TESTING SERVER') }`);
        console.log(`  Server is listening to ${ colors.green(port.toString()) }`);
        console.log(colors.magenta('======================================='));
    })
})()