import React from 'react';
import { IUser } from '../services';
import { Link } from 'react-router-dom';

export function UserCardComponent (props: { user: IUser }) {
    return (
        <Link to={`/user/${ props.user.id }`}>
            <div className="box">
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
        </Link>
    )
}