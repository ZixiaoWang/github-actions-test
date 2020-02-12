import { DI } from '../di';
import { FetchService } from "./fetch.service";

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
    },
    geo: {
        lat: string,
        lng: string
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export const UserPlaceholder: IUser = {
    id: -1,
    name: 'Loading...',
    username: 'Loading...',
    email: 'Loading...',
    address: {
        street: 'Loading...',
        suite: 'Loading...',
        city: 'Loading...',
        zipcode: 'Loading...',
    },
    geo: {
        lat: 'Loading...',
        lng: 'Loading...'
    },
    phone: 'Loading...',
    website: 'Loading...',
    company: {
        name: 'Loading...',
        catchPhrase: 'Loading...',
        bs: 'Loading...'
    }
}

@DI.Injectable()
export class UserService {
    constructor(private fetch: FetchService) {}

    getUsers = (): Promise<IUser[]> => {
        return this.fetch.getJSON('/users');
    }

    getUserByUserId = (userId: string | number): Promise<IUser> => {
        return this.fetch.getJSON(`/users/${ userId }`);
    }
}