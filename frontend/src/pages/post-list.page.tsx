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
        <PostListComponent posts={ posts } />
    )
}