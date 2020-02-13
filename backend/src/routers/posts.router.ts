import express from 'express';
import { 
    PostController,
    CommentController
} from '../services';
import { IPost, IComment } from '../interface';

const PostRouter: express.Router = express.Router();

PostRouter.get('', async (req: express.Request, res: express.Response) => {
    try {
        const posts: IPost[] = await PostController.getPosts();
        res.json(posts);
    } catch (e) {
        res.status(500).send(e);
    }
});

PostRouter.get('/:postId', async (req: express.Request, res: express.Response) => {
    try {
        const post: IPost = await PostController.getPostByPostId(req.params.postId);
        res.json(post);
    } catch (e) {
        res.status(500).send(e);
    }
});

PostRouter.get('/:postId/comments', async (req: express.Request, res: express.Response) => {
    try {
        const comments: IComment[] = await CommentController.getCommentsByPostId(req.params.postId);
        res.json(comments);
    } catch (e) {
        res.status(500).send(e);
    }
});

export { PostRouter };