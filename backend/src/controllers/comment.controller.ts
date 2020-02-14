import faker from 'faker';
import { IComment } from '../interface';

const generateComment = () => {
    let body = '';
    let random = Math.random();

    if (random < 0.33) {
        body = faker.lorem.sentence();
    } else if (random < 0.67) {
        body = faker.lorem.words();
    } else {
        body = faker.lorem.paragraph()
    }

    return {
        uuid: faker.random.uuid(),
        postId: faker.random.number(),
        userId: faker.random.number(),
        id: faker.random.number(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        body
    }
}

const getCommentByCommentId = async (commentId: number | string): Promise<IComment> => {
    const id: number = Number(commentId);

    return {
        id,
        ...generateComment()
    }
}

const getCommentsByUserId = async (userId: number | string): Promise<IComment[]> => {
    const ID: number = Number(userId);
    const number: number = Math.round( Math.random() * 255 + 1 );

    return new Array(number)
        .fill(0)
        .map(() => {
            return {
                userId: ID,
                ...generateComment()
            }
        });
}

const getCommentsByPostId = async (postId: number | string): Promise<IComment[]> => {
    const ID: number = Number(postId);
    const number: number = Math.round( Math.random() * 325 + 1 );

    return new Array(number)
        .fill(0)
        .map(() => {
            return {
                postId: ID,
                ...generateComment()
            }
        });
}

export const CommentController = {
    getCommentByCommentId,
    getCommentsByPostId,
    getCommentsByUserId
}