import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useService } from '../hooks';
import { PostService, IPost, IUser, UserService, PostPlaceholder, UserPlaceholder, IComment, CommentService } from '../services';
import { UserCardComponent } from '../components';

export function PostContent() {
    const { postId } = useParams();
    const [post, setPost]: [IPost, any] = useState(PostPlaceholder);
    const [user, setUser]: [IUser, any] = useState(UserPlaceholder);
    const [comments, setComments]: [IComment|unknown, any] = useState(null);
    const postService: PostService = useService(PostService);
    const userService: UserService = useService(UserService);
    const commentService: CommentService = useService(CommentService);

    const loadComments = async () => {
        const newComments: IComment[] = await commentService.getCommentsByPostId(post.id);
        setComments(newComments);
    } 

    useEffect(() => {
        (async () => {
            const newPost: IPost = await postService.getPostById(postId || '');
            const newUser: IUser = await userService.getUserByUserId(newPost.userId);
            setComments(null);
            setPost(newPost);
            setUser(newUser);
        })()
    }, []);

    const renderComments = () => {
        const c: IComment[] = comments as IComment[];
        if (c) {
            if (c.length > 0) {
                return (
                    c.map((comment: IComment, index: number) => {
                        return (
                            <div className="field">
                                <div className="small is-size-7 has-text-grey">
                                    { comment.email }
                                </div>
                                <div className="small is-size-7 has-text-black">
                                    { comment.body }
                                </div>
                            </div>
                        )
                    })
                );
            } else {
                return (
                    <span>It doesn't have any comments yet</span>
                );
            }
        }
    }

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-12">
                        <h2 className="title is-2">
                            { post.title }
                        </h2>
                        <UserCardComponent user={ user } />
                        <hr/>
                        <p>
                            { post.body }
                        </p>
                        <hr/>
                        <label className="label">Comments</label>
                        {
                            comments ? 
                            renderComments() :
                            <button className="button is-small" onClick={ loadComments }>Show comments</button>

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}