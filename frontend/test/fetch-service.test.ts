import { FetchService } from "../src/services"

const mockServerURL: string = 'https://xiaoxiao-echo-server';
const fetchService: FetchService = new FetchService().setBaseURL(mockServerURL);

describe('Fetch Service Test', () => {
    test('Fetch.getJSON', async () => {
        const BASEURL = '';
        await expect(fetchService.getJSON('?test=true')).resolves.toEqual({ test: 'true' })
    })
})