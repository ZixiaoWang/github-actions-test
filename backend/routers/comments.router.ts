import express from 'express';
import { CommentController } from '../controllers';
import { IComment } from '../interface';

const CommentRouter: express.Router = express.Router();

/**
 * @swagger
 * path:
 *  /comments/{commentId}:
 *      get:
 *          tags: [Comments]
 *          description: Return the comment with given id
 *          produces:
 *              - application/json
 *          responses:  
 *              200:
 *                  description: Get the comment with the given comment id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/Comment'
 */ 
CommentRouter.get('/:commentId', async (req: express.Request, res: express.Response) => {
    try {
        const comment: IComment = await CommentController.getCommentByCommentId(req.params.commentId);
        res.json(comment);
    } catch (e) {
        res.status(500).send(e);
    }
})

export { CommentRouter }