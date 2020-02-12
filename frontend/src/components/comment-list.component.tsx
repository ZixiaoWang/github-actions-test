import { h, Fragment } from 'preact';
import { IComment } from '../services';

export const CommentList = (props: { comments: IComment[] }) => {
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