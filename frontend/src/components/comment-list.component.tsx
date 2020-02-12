import React, { Fragment } from 'react';
import { IComment } from '../services';

export function CommentListComponent(props: { comments: IComment[] }) {
    return (
        <Fragment>
            {
                props.comments.map((comment: IComment, index: number) => {
                    return (
                        <div className="box">
                            <div className="content">
                                <div className="small">{ comment.email }</div>
                                <p>
                                    { comment.body }
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}