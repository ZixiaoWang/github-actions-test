import 'reflect-metadata';
import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { DI } from './di';
import { PostService, UserService, CommentService, FetchService } from './services';

import PostList from './pages/PostList';
import PostContent from './pages/PostContent';
import UserDetail from './pages/UserDetail';
import CommentDetail from './pages/CommentDetail';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/posts" exact component={ PostList } />
                <Route path="/posts/:postId" exact component={ PostContent } />
                <Route path="/user/:userId" exact component={ UserDetail } />
                <Route path="/comments/:commentId" exact component={ CommentDetail } />
                <Redirect to="/posts" />
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

render(
    <App />,
    document.body
)