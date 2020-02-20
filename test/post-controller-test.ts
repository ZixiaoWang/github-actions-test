import faker from 'faker';
import { PostController } from "../backend/controllers";
import { IPost } from "../backend/interface";

describe('Post Controller Test', () => {

    test('PostController.getPosts()', async () => {
        const posts: IPost[] = await PostController.getPosts();
        return expect(posts instanceof Array).toBeTruthy();
    });

    test('PostController.getPostByPostId()', async () => {
        const postId: number = faker.random.number();
        const post: IPost = await PostController.getPostByPostId(postId);
        expect(post.id).toBe(postId);
    });

    test('PostController.getPostsByUserId()', async () => {
        const userId: number = faker.random.number();
        const posts: IPost[] = await PostController.getPostsByUserId(userId);
        expect(posts instanceof Array).toBeTruthy();
    });
})