import { DI } from '../di';

declare const BASEURL: string;
@DI.Injectable()
export class FetchService {
    private baseURL: string = !!BASEURL ? BASEURL : 'https://jsonplaceholder.typicode.com';

    setBaseURL = (url: string): FetchService => {
        this.baseURL = url;
        return this;
    }

    getJSON = (url: string, headers: any = {}): Promise<any> => {
        return fetch(this.baseURL + url, { headers })
            .then(res => res.status > 200 ? Promise.reject(res.status) : res)
            .then(res => res.json());
    }

    getText = (url: string, headers: any = {}): Promise<any> => {
        return fetch(this.baseURL + url, { headers })
            .then(res => res.status > 200 ? Promise.reject(res.status) : res)
            .then(res => res.text());
    }

    getHeaders = (url: string, headers: any = {}): Promise<Headers> => {
        return fetch(this.baseURL + url, { headers })
            .then(res => res.headers);
    }

    getResponse = (url: string, headers: any = {}): Promise<Response> => {
        return fetch(this.baseURL + url, { headers })
    }
}