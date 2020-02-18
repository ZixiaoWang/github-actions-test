import React from 'react';
import faker from 'faker';
import { act, create } from 'react-test-renderer';
import { PostList } from '../src/pages/PostList';
import { IPost } from '../src/services';
import { StaticRouter } from 'react-router-dom';

const getPost = (): IPost => {
    return {
        userId: faker.random.number(),
        id: faker.random.number(),
        title: faker.lorem.words(),
        body: faker.lorem.paragraph()
    }
}

const mockPostService: any = {
    getPosts: async (): Promise<IPost[]> => {
        return [getPost()];
    },
    getPostsById: async (id: string|number): Promise<IPost> => {
        return getPost();
    },
    getPogetPostsByUserIdstsById: async (id: string|number): Promise<IPost[]> => {
        return [getPost()];
    }
}

describe('Post List Page Testing', () => {
    test('Correctly rendered', async () => {
        let component: any;

        await act(async () => {
            component = create(
                <StaticRouter>
                    <PostList postService={ mockPostService }></PostList>
                </StaticRouter>
            );
        });

        expect(component.toJSON()).toMatchSnapshot();
    })
})