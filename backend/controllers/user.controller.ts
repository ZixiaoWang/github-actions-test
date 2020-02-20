import faker from 'faker';
import { IUser } from '../interface';

const generateUser = () => {
    return {
        uuid: faker.random.uuid(),
        id: faker.random.number(),
        avatar: faker.image.avatar(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        address: {
            street: faker.address.streetAddress(),
            suite: faker.address.streetSuffix(),
            city: faker.address.city(),
            zipcode: faker.address.zipCode()
        },
        geo: {
            lat: faker.address.latitude(),
            lng: faker.address.longitude()
        },
        phone: faker.phone.phoneNumberFormat(),
        website: faker.internet.url(),
        company: {
            name: faker.company.companyName(),
            catchPhrase: faker.company.catchPhrase(),
            bs: faker.company.bs()
        }
    }
}

const getUsers = async (userNum: number = 50): Promise<IUser[]> => {
    return new Array(userNum)
        .fill(0)
        .map((item: number, index: number) => {
            return {
                ...generateUser(),
                id: index
            }
        })
}

const getUserByUserId = async (userId: string | number = 0): Promise<IUser> => {
    const id: number = Number(userId);
    return {
        ...generateUser(),
        id
    }
}

export const UserController = {
    getUserByUserId,
    getUsers
}