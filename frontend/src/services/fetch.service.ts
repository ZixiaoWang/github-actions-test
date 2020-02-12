import { DI } from '../di';

@DI.Injectable()
export class FetchService {
    private baseURL: string = 'https://jsonplaceholder.typicode.com';

    setBaseURL = (url: string): FetchService => {
        this.baseURL = url;
        return this;
    }

    getJSON = (url: string): Promise<any> => {
        return fetch(this.baseURL + url)
            .then(res => res.status > 200 ? Promise.reject(res.status) : res)
            .then(res => res.json());
    }

    getText = (url: string): Promise<any> => {
        return fetch(this.baseURL + url)
            .then(res => res.status > 200 ? Promise.reject(res.status) : res)
            .then(res => res.text());
    }

    getHeaders = (url: string): Promise<Headers> => {
        return fetch(this.baseURL + url)
            .then(res => res.headers);
    }

    getResponse = (url: string): Promise<Response> => {
        return fetch(this.baseURL + url)
    }
}