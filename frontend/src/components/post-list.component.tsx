import React from 'react';
import { Link } from '../router-provider';
import { IPost } from '../services';

interface PostListComponentProps {
    posts: IPost[]
}

export function PostListComponent(props: PostListComponentProps) {
    return (
        <div className="container">
            <div className="columns is-multiline">
                {
                    props
                        .posts
                        .map((post: IPost, index: number) => {
                            return (
                                <div className="column is-3" key={ index }>
                                    <div className="card" key={ index }>
                                        <Link to={`/posts/${ post.id }`} href={`/PostContent?postId=${ post.id }`}>
                                            <div className="card-content content">
                                                <h4 className="title is-4">{ post.title }</h4>
                                                <span className="subtitle is-7">
                                                    <small>{ post.body.substring(0, 200) + '...' }</small>
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}