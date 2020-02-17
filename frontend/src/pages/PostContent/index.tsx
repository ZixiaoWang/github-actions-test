import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostService, IPost, IUser, UserService, PostPlaceholder, UserPlaceholder, IComment, CommentService } from '../../services';
import { UserCardComponent, CommentListComponent } from '../../components';
import { DI } from '../../di';

export interface PostContentProps {
    postService: PostService,
    userService: UserService,
    commentService: CommentService,
    [key: string]: any
}

export function PostContent({ postService, userService, commentService }: PostContentProps) {
    const { postId } = useParams();
    const [post, setPost]: [IPost, any] = useState(PostPlaceholder);
    const [user, setUser]: [IUser, any] = useState(UserPlaceholder);
    const [commentStatus, setCommentStatus] = useState(0);
    const [comments, setComments]: [IComment[], any] = useState([]);

    const loadComments = async () => {
        setCommentStatus(1);
        const newComments: IComment[] = await commentService.getCommentsByPostId(post.id);
        setCommentStatus(2);
        setComments(newComments);
    } 

    useEffect(() => {
        (async () => {
            const newPost: IPost = await postService.getPostById(postId || '');
            const newUser: IUser = await userService.getUserByUserId(newPost.userId);
            setComments([]);
            setPost(newPost);
            setUser(newUser);
        })()
    }, []);

    const renderComments = () => {
        if (commentStatus === 0) {
            return <button className="button is-small" onClick={ loadComments }>Show comments</button>
        } else if (commentStatus === 1) {
            return <span>Loading....</span>
        } else {
            if (comments.length > 0) {
                return (
                    comments
                        .map((comment: IComment, index: number) => {
                            return <CommentListComponent comments={ comments } />
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
                        { renderComments() }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DI
    .inject({
        postService: DI.provide(PostService),
        userService: DI.provide(UserService),
        commentService: DI.provide(CommentService)
    })
    .into(PostContent)
