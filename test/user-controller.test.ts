import faker from 'faker';
import { UserController } from "../backend/controllers";
import { IUser } from "../backend/interface";

describe('User Controller Test', () => {

    test('UserController.getUsers()', async () => {
        const users: IUser[] = await UserController.getUsers();
        return expect(users instanceof Array).toBeTruthy();
    });

    test('UserController.getUserByUserId()', async () => {
        const userId: number = faker.random.number();
        const user: IUser = await UserController.getUserByUserId(userId);
        expect(user.id).toBe(userId);
        expect(user.hasOwnProperty('username')).toBeTruthy();
        expect(user.hasOwnProperty('address')).toBeTruthy();
        expect(user.address.hasOwnProperty('street')).toBeTruthy();
    });
})