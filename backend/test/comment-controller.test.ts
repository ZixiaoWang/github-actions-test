import faker from 'faker';
import { CommentController } from "../controllers";
import { IComment } from "../interface";

describe('Comment Controller Test', () => {

    test('CommentController.getCommentByCommentId()', async () => {
        const commentId: number = faker.random.number();
        const comment: IComment = await CommentController.getCommentByCommentId(commentId);
        return expect(comment.id).toBe(commentId);
    });

    test('CommentController.getCommentsByUserId()', async () => {
        const userId: number = faker.random.number();
        const comments: IComment[] = await CommentController.getCommentsByUserId(userId);
        expect(comments instanceof Array).toBeTruthy();
    });

    test('CommentController.getCommentsByPostId()', async () => {
        const postId: number = faker.random.number();
        const comments: IComment[] = await CommentController.getCommentsByUserId(postId);
        expect(comments instanceof Array).toBeTruthy();
    });
})