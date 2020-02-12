import React, { Fragment } from 'react';
import { IUser } from '../services';

export function UserDetailComponent(props: { user: IUser }) {
    return (
        <Fragment>
            <div className="field">
                <h3 className="title is-3">
                    { props.user.name }
                </h3>
            </div>
            <div className="field">
                <label className="label">Username</label>
                <p>{ props.user.username }</p>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <p>{ props.user.email }</p>
            </div>
            <div className="field">
                <label className="label">Address</label>
                <p>{ props.user.address.street }</p>
                <p>{ props.user.address.suite }</p>
                <p>{ props.user.address.city }</p>
            </div>
            <div className="field">
                <label className="label">Phone</label>
                <p>{ props.user.phone }</p>
            </div>
            <div className="field">
                <label className="label">Website</label>
                <p>{ props.user.website }</p>
            </div>
            <div className="field">
                <label className="label">Company</label>
                <p>{ props.user.company.name }</p>
                <p>{ props.user.company.catchPhrase }</p>
                <p>{ props.user.company.bs }</p>
            </div>
        </Fragment>
    )
}