import express from 'express';
import { 
    PostController,
    CommentController
} from '../controllers';
import { IPost, IComment } from '../interface';

const PostRouter: express.Router = express.Router();

/**
 * @swagger
 * path:
 *  /posts:
 *      get:
 *          tags: [Posts]
 *          description: Return all the posts
 *          produces:
 *              - application/json
 *          responses:  
 *              200:
 *                  description: Get all the posts
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/definitions/Post'
 */  
PostRouter.get('', async (req: express.Request, res: express.Response) => {
    try {
        const posts: IPost[] = await PostController.getPosts();
        res.json(posts);
    } catch (e) {
        res.status(500).send(e);
    }
});


/**
 * @swagger
 * path:
 *  /posts/{postId}:
 *      get:
 *          tags: [Posts]
 *          description: Return the post with given id
 *          produces:
 *              - application/json
 *          responses:  
 *              200:
 *                  description: Get the post with the given post id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/Post'
 */ 
PostRouter.get('/:postId', async (req: express.Request, res: express.Response) => {
    try {
        const post: IPost = await PostController.getPostByPostId(req.params.postId);
        res.json(post);
    } catch (e) {
        res.status(500).send(e);
    }
});


/**
 * @swagger
 * path:
 *  /posts/{postId}/comments:
 *      get:
 *          tags: [Posts]
 *          description: Return the comments under the post with given post id
 *          produces:
 *              - application/json
 *          responses:  
 *              200:
 *                  description: Get the comments under the post with the given post id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/definitions/Comment'
 */ 
PostRouter.get('/:postId/comments', async (req: express.Request, res: express.Response) => {
    try {
        const comments: IComment[] = await CommentController.getCommentsByPostId(req.params.postId);
        res.json(comments);
    } catch (e) {
        res.status(500).send(e);
    }
});

export { PostRouter };