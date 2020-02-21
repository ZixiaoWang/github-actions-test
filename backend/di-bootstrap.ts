import { DI } from '../frontend/src/di';
import { 
    PostService, 
    UserService, 
    CommentService, 
    FetchService 
} from '../frontend/src/services';

export const DIBootstrap = () => {
    DI.bootstrap([
        FetchService,
        PostService,
        UserService,
        CommentService
    ]);
}

export * from '../frontend/src/di';
export * from '../frontend/src/services';