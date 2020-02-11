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