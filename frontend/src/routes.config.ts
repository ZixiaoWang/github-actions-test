import 'reflect-metadata';
// import PostList from './pages/PostList';
// import PostContent from './pages/PostContent';
// import UserDetail from './pages/UserDetail';
// import CommentDetail from './pages/CommentDetail';
// import Home from './pages/Home';

const PostList = null;
const PostContent = null;
const UserDetail = null;
const CommentDetail = null;
const Home = null;

export interface IRouteItem {
    path: string,
    exact?: boolean,
    pagePath?: string,
    component?: any,
    default?: boolean,
    query?: any,
    queryString?: string,
    redirect?: string
}

export const routes: IRouteItem[] = [
    {
        path: "/home",
        exact: true,
        pagePath: "/Index",
        component: Home,
        default: true
    },
    {
        path: "/posts",
        exact: true,
        pagePath: "/PostList",
        component: PostList,
        default: false
    },
    {
        path: "/posts/:postId",
        exact: true,
        pagePath: "/PostContent",
        component: PostContent,
        default: false
    },
    {
        path: "/users/:userId",
        exact: true,
        pagePath: "/UserDetail",
        component: UserDetail,
        default: false
    },
    {
        path: "/comments/:commentId",
        exact: true,
        pagePath: "/CommentDetail",
        component: CommentDetail,
        default: false
    }
]