import faker from 'faker';

const generatePost = () => {
    return {
        uuid: faker.random.uuid(),
        id: faker.random.number(),
        userId: faker.random.number(),
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraphs()
    }
}

const getPosts = (postNumber: number = 50) => {
    return new Array(postNumber)
        .fill(0)
        .map((item: number, index: number) => {
            return {
                id: index,
                ...generatePost()
            }
        });
}

const getPostByPostId = (postId: number | string) => {
    const id: number = Number(postId);

    return {
        id,
        ...generatePost()
    }
}

const getPostsByUserId = (userId: number | string) => {
    const id: number = Number(userId);
    const postNum: number = Math.round( Math.random() * 15 + 2 );

    return new Array(postNum)
        .fill(0)
        .map(() => {
            return {
                userId,
                ...generatePost()
            }
        })
}

export const PostController = {
    getPosts,
    getPostByPostId,
    getPostsByUserId
}