import 'reflect-metadata';
import { lazy } from 'react';

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
        component: lazy(() => import('./pages/Home')),
        default: true
    },
    {
        path: "/posts",
        exact: true,
        pagePath: "/PostList",
        component: lazy(() => import('./pages/PostList')),
        default: false
    },
    {
        path: "/posts/:postId",
        exact: true,
        pagePath: "/PostContent",
        component: lazy(() => import('./pages/PostContent')),
        default: false
    },
    {
        path: "/users/:userId",
        exact: true,
        pagePath: "/UserDetail",
        component: lazy(() => import('./pages/UserDetail')),
        default: false
    },
    {
        path: "/comments/:commentId",
        exact: true,
        pagePath: "/CommentDetail",
        component: lazy(() => import('./pages/CommentDetail')),
        default: false
    }
]