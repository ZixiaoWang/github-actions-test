import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { CommentRouter } from './comments.router';
import { PostRouter } from './posts.router';
import { UserRouter } from './users.router';

import { swaggerUIJsonObject } from '../config';

const AuthRouter: express.Router = express.Router();

AuthRouter.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerUIJsonObject, { explorer: true }))
AuthRouter.use('/users', UserRouter);
AuthRouter.use('/posts', PostRouter);
AuthRouter.use('/comments', CommentRouter);
AuthRouter.use('*', (req: express.Request, res: express.Response) => {
    res
        .status(404)
        .json({
            status: 404,
            error: 'Resource not found',
            message: `Didn't find requested resources` 
        })
})

export { AuthRouter }