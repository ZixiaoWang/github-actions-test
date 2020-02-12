import { DI } from '../di';
import { FetchService } from './fetch.service';

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const PostPlaceholder: IPost = {
    userId: -1,
    id: -1,
    title: 'Loading...',
    body: 'Loading...'
}

@DI.Injectable()
export class PostService {

    constructor(private fetch: FetchService) {}

    getPosts = (): Promise<IPost[]> => {
        return this.fetch.getJSON('/posts');
    }

    getPostById = (id: number | string): Promise<IPost> => {
        return this.fetch.getJSON(`/posts/${ id }`);
    }

    getPostsByUserId = (userId: number | string): Promise<IPost[]> => {
        return this.fetch.getJSON(`/users/${ userId }/posts`);
    }
}