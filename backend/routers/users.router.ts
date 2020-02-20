import express from 'express';
import { 
    UserController,
    PostController,
    CommentController
} from '../controllers';
import { IUser, IComment, IPost } from '../interface';

const UserRouter: express.Router = express.Router();

/**
 * @swagger
 * path:
 *  /users:
 *      get:
 *          tags: [Users]
 *          description: Return all the users
 *          produces:
 *              - application/json
 *          responses:  
 *              200:
 *                  description: Get all the users
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/definitions/User'
 */                     
UserRouter.get('', async (req: express.Request, res: express.Response) => {
    try {
        const users: IUser[] = await UserController.getUsers();
        res.json(users);
    } catch (e) {
        res.status(500).send(e);
    }
});


/**
 * @swagger
 * path:
 *  /users/{userId}:
 *      get:
 *          tags: [Users]
 *          description: Return the user with given id
 *          produces:
 *              - application/json
 *          responses:  
 *              200:
 *                  description: Get the user with the given user id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/User'
 */ 
UserRouter.get('/:userId', async (req: express.Request, res: express.Response) => {
    try {
        const user: IUser = await UserController.getUserByUserId(req.params.userId);
        res.json(user);
    } catch (e) {
        res.status(500).send(e);
    }
})


/**
 * @swagger
 * path:
 *  /users/{userId}/posts:
 *      get:
 *          tags: [Users]
 *          description: Return all the posts under the user with the given user id
 *          produces:
 *              - application/json
 *          responses:  
 *              200:
 *                  description: get all the posts from the user with the given id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/definitions/Post'
 */ 
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