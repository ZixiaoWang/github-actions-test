import faker from 'faker';
import { FetchService } from "../src/services";
import 'isomorphic-fetch';

// These are real servers!
const echoServerURL: string = 'https://xiaoxiao-echo-server.herokuapp.com';
const mockServerURL: string = 'https://xiaoxiao-mock-server.herokuapp.com';
const fetchService: FetchService = new FetchService();

describe('Fetch Service Test', () => {
    test('Fetch.getJSON().resolve', async () => {
        fetchService.setBaseURL(echoServerURL);
        await expect(fetchService.getJSON('?test=true')).resolves.toEqual({ test: 'true' })
    });

    test('Fetch.getText().resolve', async () => {
        const payload: string = faker.lorem.paragraph();
        fetchService.setBaseURL(mockServerURL);
        await expect(
            fetchService.getText(
                '/',
                {
                    "x-mock-type": "text",
                    "x-mock-status": 200,
                    "x-mock-body": payload
                }
            )
        ).resolves.toEqual(payload);
    });

    test('Fetch.getJSON().reject', async () => {
        const status: number = Math.round( Math.random() * 10 + 400);
        fetchService.setBaseURL(mockServerURL);
        await expect(
            fetchService.getText(
                '/',
                {
                    "x-mock-type": "text",
                    "x-mock-status": status
                }
            )
        ).rejects.toEqual(status);
    });
})