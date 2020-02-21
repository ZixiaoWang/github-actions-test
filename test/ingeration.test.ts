import faker from 'faker';
import axios, { AxiosResponse } from 'axios';
import { IPost, IComment, IUser } from '../backend/interface';

let DOMAIN: string = 'http://localhost:8080'
let options: any;

describe('Integration Test', () => {
    beforeAll(async () => {
        const response: AxiosResponse = await axios.post(DOMAIN + '/login', { data: 'nothing' });
        const response_headers: Headers = response.headers;
        const cookie = response_headers['set-cookie'][0];
        options = { headers: { cookie }, withCredentials: true }
        return true;
    });

    test('Get all the posts', async () => {
        const url: string = DOMAIN + '/api/v1/posts';

        const response: AxiosResponse = await axios.get(url, options);
        const posts: IPost[] = response.data;
        expect(response.status).toBe(200);
        expect(posts instanceof Array).toBeTruthy();
    });

    test('Get the post by post id', async () => {
        const postId: number = faker.random.number();
        const url: string = DOMAIN + `/api/v1/posts/${ postId }`;

        const response: AxiosResponse = await axios.get(url, options);
        const post: IPost = response.data;
        expect(response.status).toBe(200);
        expect(post.id).toBe(postId);
    });

    test('Get all the comments by post id', async () => {
        const postId: number = faker.random.number();
        const url: string = DOMAIN + `/api/v1/posts/${ postId }/comments`;

        const response: AxiosResponse = await axios.get(url, options);
        const comments: IComment[] = response.data;
        expect(response.status).toBe(200);
        expect(comments instanceof Array).toBeTruthy();
    });

    test('Get the comment by comment id', async () => {
        const commentId: number = faker.random.number();
        const url: string = DOMAIN + `/api/v1/comments/${ commentId }`;

        const response: AxiosResponse = await axios.get(url, options);
        const comment: IComment = response.data;
        expect(response.status).toBe(200);
        expect(comment.id).toBe(commentId);
    })

    test('Get all the users', async () => {
        const url: string = DOMAIN + `/api/v1/posts`;

        const response: AxiosResponse = await axios.get(url, options);
        const users: IUser[] = response.data;
        expect(response.status).toBe(200);
        expect(users).toBeInstanceOf(Array)
    })

    test('Get the user by user id', async () => {
        const userId: number = faker.random.number();
        const url: string = DOMAIN + `/api/v1/users/${ userId }`;

        const response: AxiosResponse = await axios.get(url, options);
        const user: IUser = response.data;
        expect(response.status).toBe(200);
        expect(user.id).toBe(userId);
    })

    test('Get the comment by comment id', async () => {
        const userId: number = faker.random.number();
        const url: string = DOMAIN + `/api/v1/users/${ userId }/posts`;

        const response: AxiosResponse = await axios.get(url, options);
        const posts: IPost[] = response.data;
        expect(response.status).toBe(200);
        expect(posts).toBeInstanceOf(Array);
    })
})