import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IComment } from '../services';

export function CommentListComponent(props: { comments: IComment[] }) {
    return (
        <Fragment>
            {
                props.comments.map((comment: IComment, index: number) => {
                    return (
                        <div className="field" key={ index }>
                            <Link to={`/comments/${ comment.id }`}>
                                <div className="small is-size-7 has-text-grey">
                                    { comment.email }
                                </div>
                                <div className="small is-size-7 has-text-black">
                                    { comment.body }
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}