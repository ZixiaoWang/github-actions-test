import React, { useState, useEffect } from 'react';
import { DI } from '../di';
import { CommentService, CommentPlaceholder, IComment } from '../services';
import { useParams } from 'react-router-dom';

export const CommentDetail = ({ commentService }: { commentService: CommentService }) => {
    const { commentId } = useParams();
    const [comment, setComment] = useState(CommentPlaceholder);

    useEffect(() => {
        (async () => {
            const newComment: IComment = await commentService.getCommentByCommentId(commentId as string);
            setComment(newComment);
        })()
    }, [])

    return (
        <section className="section">
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-12">
                        <h4 className="title is-4">Comment</h4>
                    </div>
                    <div className="column is-12">
                        <div className="box content">
                            <label className="label">
                                { comment.name }
                            </label>
                            <small>{ comment.email }</small>
                            <hr/>
                            <p>
                                { comment.body }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DI
    .inject({ commentService: DI.provide(CommentService) })
    .into(CommentDetail);