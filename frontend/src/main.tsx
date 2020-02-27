import 'reflect-metadata';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { render } from 'react-dom';

import { DI } from './di';
import { routes, IRouteItem } from './routes.config';
import { PostService, UserService, CommentService, FetchService, RouteService } from './services';

// import PostList from './pages/PostList';
// import PostContent from './pages/PostContent';
// import UserDetail from './pages/UserDetail';
// import CommentDetail from './pages/CommentDetail';
// import Home from './pages/Home';

// const PostList = lazy(() => import('./pages/PostList'));
// const PostContent = lazy(() => import('./pages/PostContent'));
// const UserDetail = lazy(() => import('./pages/UserDetail'));
// const CommentDetail = lazy(() => import('./pages/CommentDetail'));
// const Home = lazy(() => import('./pages/Home'));

DI.bootstrap([
    FetchService,
    PostService,
    UserService,
    CommentService,
    RouteService
]);

const App = () => {
    const defaultRoutes: JSX.Element[] = [];
    const redirectRoutes: JSX.Element[] = [];
    const normalRoutes: JSX.Element[] = [];

    routes
        .forEach((route: IRouteItem, index: number) => {
            if (route.default) {
                defaultRoutes.push(<Redirect to={ route.path } />);
            }
            if (route.redirect) {
                redirectRoutes.push(
                    <Redirect path={ route.path } 
                        exact={ route.exact } 
                        to={ route.redirect }>
                    </Redirect>
                );
            } else {
                normalRoutes.push(
                    <Route path={ route.path }
                        exact={ route.exact }
                        component={ route.component }>
                    </Route>
                )
            }
        })

    return (
        <HashRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    { 
                        normalRoutes.concat(redirectRoutes, defaultRoutes) 
                    }
                </Switch>
            </Suspense>
        </HashRouter>
    )
}

// Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js');
    });
}

render(
    <App />,
    document.body
)