import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useService } from '../hooks';
import { PostService, IPost, IUser, UserService, PostPlaceholder, UserPlaceholder } from '../services';
import { UserCardComponent } from '../components';

export function PostContent() {
    const { postId } = useParams();
    const [post, setPost]: [IPost, any] = useState(PostPlaceholder);
    const [user, setUser]: [IUser, any] = useState(UserPlaceholder);
    const postService: PostService = useService(PostService);
    const userService: UserService = useService(UserService);

    useEffect(() => {
        (async () => {
            const newPost: IPost = await postService.getPostById(postId || '');
            const newUser: IUser = await userService.getUserByUserId(newPost.userId);
            setPost(newPost);
            setUser(newUser);
        })()
    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-12">
                        <h2 className="title is-2">
                            { post.title }
                        </h2>
                        <UserCardComponent user={ user } />
                        <p>
                            { post.body }
                        </p>
                        <hr/>
                        <label className="label">Comments</label>
                    </div>
                </div>
            </div>
        </section>
    )
}