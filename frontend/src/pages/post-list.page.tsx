import React, { useState, useEffect, SetStateAction } from 'react';
import { useService } from '../hooks';
import { PostService, IPost } from '../services';
import { PostListComponent } from '../components';

export function PostList() {
    const [posts, setPosts]: [IPost[], any] = useState([]);
    const postService: PostService = useService(PostService);

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