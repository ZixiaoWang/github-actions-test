import * as ReactRouterDOM from 'react-router-dom';
import { useRouter } from 'next/router';

const UseParamWrapper: any = { useParams: null };

if (process.env.SSR || process.env.SSR === 'true') {
    UseParamWrapper.useParams = () => {
        const router = useRouter();
        return router.query;
    }
} else {
    UseParamWrapper.useParams = () => {
        const params = ReactRouterDOM.useParams();
        return params;
    }
}

export const useParams = UseParamWrapper.useParams;