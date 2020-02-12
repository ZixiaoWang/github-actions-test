import React from 'react';
import { IUser } from '../services';
import { useHistory } from 'react-router-dom';

export function UserCardComponent (props: { user: IUser }) {
    const history = useHistory();

    const toUserPage = (user: IUser) => {
        history.push(`/user/${ user.id }`);
    }

    return (
        <div className="box" onClick={() => toUserPage(props.user)}>
            <div className="content">
                <h5 className="title is-5">
                    { props.user.name }
                </h5>
                <div className="small">
                    <span>Website: </span>
                    { props.user.website }
                </div>
                <div className="small">
                    <span>Email: </span>
                    { props.user.email }
                </div>
            </div>
        </div>
    )
}