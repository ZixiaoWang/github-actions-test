import 'reflect-metadata';
import { lazy } from 'react';

const PostList = lazy(() => import('./pages/PostList'));
const PostContent = lazy(() => import('./pages/PostContent'));
const UserDetail = lazy(() => import('./pages/UserDetail'));
const CommentDetail = lazy(() => import('./pages/CommentDetail'));
const Home = lazy(() => import('./pages/Home'));

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