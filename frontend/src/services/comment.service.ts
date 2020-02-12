import { DI } from '../di';
import { FetchService } from './fetch.service';

export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
@DI.Injectable()
export class CommentService {

    constructor(private fetch: FetchService) {}

    getCommentsByPostId = (postId: string | number): Promise<IComment[]> => {
        return this.fetch.getJSON(`/posts/${ postId }/comments`);
    }

    getCommentsByUserId = (userId: string | number): Promise<IComment[]> => {
        return this.fetch.getJSON(`/users/${ userId }/comments`);
    }
}