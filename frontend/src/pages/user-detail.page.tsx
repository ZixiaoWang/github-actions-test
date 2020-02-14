import React, { useState, useEffect } from 'react';
import { IUser, UserPlaceholder, UserService } from '../services';
import { useParams } from 'react-router-dom';
import { UserDetailComponent } from '../components';
import { DI } from '../di';

export interface UserDetailProps {
    userService: UserService,
    [key: string]: any
}

export function UserDetail({ userService }: UserDetailProps) {
    const { userId } = useParams();
    const [user, setUser]: [IUser, any] = useState(UserPlaceholder);

    useEffect(() => {
        (async () => {
            const newUser: IUser = await userService.getUserByUserId(userId || '');
            setUser(newUser);
        })()
    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-12">
                        <UserDetailComponent user={ user } />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DI
    .inject({ userService: DI.provide(UserService) })
    .into(UserDetail)
