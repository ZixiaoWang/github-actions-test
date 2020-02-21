import 'reflect-metadata';
import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { DI } from './di';

import PostList from './pages/PostList';
import PostContent from './pages/PostContent';
import UserDetail from './pages/UserDetail';
import CommentDetail from './pages/CommentDetail';
import Home from './pages/Home';

import {
    PostService,
    UserService,
    CommentService,
    FetchService
} from './services';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/posts" exact component={PostList} />
                <Route path="/posts/:postId" exact component={PostContent} />
                <Route path="/user/:userId" exact component={UserDetail} />
                <Route path="/comments/:commentId" exact component={CommentDetail} />
                <Redirect to="/home" />
            </Switch>
        </HashRouter>
    )
}

DI.bootstrap([
    FetchService,
    PostService,
    UserService,
    CommentService
]);

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