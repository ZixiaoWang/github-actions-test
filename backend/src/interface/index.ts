export interface IComment {
    uuid?: string,
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface IPost {
    uuid?: string,
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IUser {
    uuid?: string,
    avatar?: string,
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