import faker from 'faker';
import { IPost } from '../interface';

const generatePost = () => {
    return {
        uuid: faker.random.uuid(),
        id: faker.random.number(),
        userId: faker.random.number(),
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraphs()
    }
}

const getPosts = async (postNumber: number = 50): Promise<IPost[]> => {
    return new Array(postNumber)
        .fill(0)
        .map((item: number, index: number) => {
            return {
                ...generatePost(),
                id: index
            }
        });
}

const getPostByPostId = async (postId: number | string): Promise<IPost> => {
    const id: number = Number(postId);

    return {
        ...generatePost(),
        id
    }
}

const getPostsByUserId = async (userId: number | string): Promise<IPost[]> => {
    const id: number = Number(userId);
    const postNum: number = Math.round( Math.random() * 15 + 2 );

    return new Array(postNum)
        .fill(0)
        .map(() => {
            return {
                ...generatePost(),
                userId: Number(userId)
            }
        })
}

export const PostController = {
    getPosts,
    getPostByPostId,
    getPostsByUserId
}