import faker from 'faker';
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';

import { FetchService } from "../src/services";

const object = { [faker.lorem.word()]: faker.lorem.paragraph() };
const string = faker.lorem.paragraphs();
const url = faker.internet.url();

fetchMock
    .mock(`${ url }/json`, object, { delay: 200 })
    .mock(`${ url }/text`, string, { delay: 200 })
    .mock('*', 404);
const fetchService: FetchService = new FetchService();

describe('Fetch Service Test', () => {
    test('Fetch.getJSON().resolve', async () => {
        fetchService.setBaseURL(url);
        await expect(fetchService.getJSON('/json')).resolves.toEqual(object)
    });

    test('Fetch.getText().resolve', async () => {
        fetchService.setBaseURL(url);
        await expect(fetchService.getText('/text')).resolves.toEqual(string);
    });

    test('Fetch.getJSON().reject', async () => {
        fetchService.setBaseURL(url);
        await expect(fetchService.getText('/')).rejects.toEqual(404);
    });
})