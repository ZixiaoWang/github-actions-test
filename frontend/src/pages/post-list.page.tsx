import React, { useState, useEffect } from 'react';
import { PostService, IPost } from '../services';
import { PostListComponent } from '../components';
import { DI } from '../di';

export interface PostListProps {
    postService: PostService,
    [key: string]: any
}

export function PostList({ postService }: PostListProps) {
    const [posts, setPosts]: [IPost[], any] = useState([]);

    useEffect(() => {
        (async () => {
            const newPosts: IPost[] = await postService.getPosts();
            setPosts(newPosts)
        })();
    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-12">
                        <h2 className="title is-2">
                            Posts
                        </h2>
                    </div>
                </div>
            </div>
            <PostListComponent posts={ posts } />
        </section>
    )
}

export default DI
    .inject({ postService: DI.provide(PostService) })
    .into(PostList);
