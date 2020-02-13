import express from 'express';
import { 
    UserController,
    PostController,
    CommentController
} from '../services';
import { IUser, IComment, IPost } from '../interface';

const UserRouter: express.Router = express.Router();

UserRouter.get('', async (req: express.Request, res: express.Response) => {
    try {
        const users: IUser[] = await UserController.getUsers();
        res.json(users);
    } catch (e) {
        res.status(500).send(e);
    }
});

UserRouter.get('/:userId', async (req: express.Request, res: express.Response) => {
    try {
        const users: IUser[] = await UserController.getUsers();
        res.json(users);
    } catch (e) {
        res.status(500).send(e);
    }
})

UserRouter.get('/:userId/posts', async (req: express.Request, res: express.Response) => {
    try {
        const posts: IPost[] = await PostController.getPostsByUserId(req.params.userId);
        res.json(posts);
    } catch (e) {
        res.status(500).send(e);
    }
})

UserRouter.get('/:userId/comments', async (req: express.Request, res: express.Response) => {
    try {
        const comments: IComment[] = await CommentController.getCommentsByUserId(req.params.userId);
        res.json(comments);
    } catch (e) {
        res.status(500).send(e);
    }
});

export { UserRouter }