import 'reflect-metadata';
import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { PostList } from './pages/post-list.page';
import { PostContent } from './pages/post-content.page';
import { UserDetail } from './pages/user-detail.page';
import { bootstrap } from './di/bootstrap';
import { PostService, UserService, CommentService } from './services';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/posts" exact component={ PostList } />
                <Route path="/posts/:postId" exact component={ PostContent } />
                <Route path="/user/:userId" exact component={ UserDetail } />
                <Redirect to="/posts" />
            </Switch>
        </HashRouter>
    )
}

bootstrap([
    PostService,
    UserService,
    CommentService
])

render(
    <App />,
    document.body
)