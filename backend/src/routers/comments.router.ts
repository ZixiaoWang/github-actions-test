import express from 'express';
import { CommentController } from '../services';
import { IComment } from '../interface';

const CommentRouter: express.Router = express.Router();

CommentRouter.get('/:commentId', async (req: express.Request, res: express.Response) => {
    try {
        const comment: IComment = await CommentController.getCommentByCommentId(req.params.commentId);
        res.json(comment);
    } catch (e) {
        res.status(500).send(e);
    }
})

export { CommentRouter }