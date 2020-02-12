import React, { Component, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { IPost } from '../services';

interface PostListComponentProps {
    posts: IPost[]
}

export function PostListComponent(props: PostListComponentProps) {
    const history = useHistory();

    const toDetailPage = (post: IPost) => {
        const postId: number = post.id;
        history.push(`/posts/${ postId }`)
    }

    return (
        <Fragment>
            {
                props
                    .posts
                    .map((post: IPost, index: number) => {
                        return (
                            <div className="card" key={ index } onClick={() => toDetailPage(post)}>
                                <div className="card-content content">
                                    <h4 className="title is-4">{ post.title }</h4>
                                    <span className="subtitle is-7">
                                        <small>{ post.body.substring(0, 200) + '...' }</small>
                                    </span>
                                </div>
                            </div>
                        )
                    })
            }
        </Fragment>
    )
}