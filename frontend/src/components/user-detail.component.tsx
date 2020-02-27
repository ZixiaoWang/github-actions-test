import React, { Fragment } from 'react';
import { IUser } from '../services';

export function UserDetailComponent(props: { user: IUser }) {
    const { user } = props;
    return (
        <Fragment>
            <div className="field">
                <h3 className="title is-3">
                    { user.name }
                </h3>
            </div>
            <div className="field">
                <label className="label">Username</label>
                <p>{ user.username }</p>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <p>{ user.email }</p>
            </div>
            <div className="field">
                <label className="label">Address</label>
                <p>{ user.address.street }</p>
                <p>{ user.address.suite }</p>
                <p>{ user.address.city }</p>
            </div>
            <div className="field">
                <label className="label">Phone</label>
                <p>{ user.phone }</p>
            </div>
            <div className="field">
                <label className="label">Website</label>
                <p>{ user.website }</p>
            </div>
            <div className="field">
                <label className="label">Company</label>
                <p>{ user.company.name }</p>
                <p>{ user.company.catchPhrase }</p>
                <p>{ user.company.bs }</p>
            </div>
        </Fragment>
    )
}