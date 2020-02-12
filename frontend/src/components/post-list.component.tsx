import { h } from 'preact';
import {  } from 'preact/hooks';
import { IPost } from '../services';

export const PostList = (props: { posts: IPost[] }) => {
    return (
        props
            .posts.map((post: IPost, index: number) => {
                return (
                    <div className="card" key={ index }>
                        <div className="card-content content">
                            <h4 className="title is-4">{ post.title }</h4>
                            <span className="subtitle is-7">
                                <small>{ post.body.substring(0, 200) + '...' }</small>
                            </span>
                        </div>
                    </div>
                )
            })
    )
}