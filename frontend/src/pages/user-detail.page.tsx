import React, { useState, useEffect } from 'react';
import { IUser, UserPlaceholder, UserService } from '../services';
import { useService } from '../hooks';
import { useParams, useHistory } from 'react-router-dom';
import { UserDetailComponent } from '../components';

export function UserDetail() {
    const { userId } = useParams();
    const [user, setUser]: [IUser, any] = useState(UserPlaceholder);
    const userService: UserService = useService(UserService);

    useEffect(() => {
        (async () => {
            const newUser: IUser = await userService.getUserByUserId(userId || '');
            setUser(newUser);
        })()
    }, []);

    return (
        <UserDetailComponent user={ user } />
    )
}