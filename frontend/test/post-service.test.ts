import { PostService } from "../src/services";
const mockFetchService: any = {
    getJSON: async (url: string, headers?: any) => {
        switch (true) {
            case /^\/posts$/.test(url): 
                return { path: url, body: 'POSTS' };

            case /^\/posts\/\d+$/.test(url): 
                return { path: url, body: 'POST/number' };

            case /^\/users\/\d+\/posts$/.test(url): 
                return { path: url, body: 'USERS/number/POSTS' };
        }
        return Promise.reject({ path: url, body: 400 });
    }
}
const postService = new PostService(mockFetchService);

describe('Post service test', () => {
    test('PostService.getPosts()', async () => {
        const response: any = await postService.getPosts();
        expect(response.path).toEqual('/posts');
        expect(response.body).toEqual('POSTS');
    });

    test('PostService.getPostbYiD()', async () => {
        const response: any = await postService.getPostById(12);
        expect(response.path).toEqual('/posts/12');
        expect(response.body).toEqual('POST/number');
    });

    test('PostService.getPosts()', async () => {
        const response: any = await postService.getPostsByUserId(234);
        expect(response.path).toEqual('/users/234/posts');
        expect(response.body).toEqual('USERS/number/POSTS');
    });

    test('PostService.reject', async () => {
        const response: any = await postService.getPostsByUserId('abc').catch(res => res);
        expect(response.path).toEqual('/users/abc/posts');
        expect(response.body).toEqual(400);
    })
});