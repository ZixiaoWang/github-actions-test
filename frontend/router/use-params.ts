import * as ReactRouterDOM from 'react-router-dom';
import * as NextRouter from 'next/router';

const UseParamWrapper = { useParams: undefined };

if (process.env.SSR || process.env.SSR === 'true') {
    UseParamWrapper.useParams = () => {
        const router = NextRouter.useRouter();
        return router.query;
    }
} else {
    UseParamWrapper.useParams = () => {
        const params = ReactRouterDOM.useParams();
        return params;
    }
}

export const useParams = UseParamWrapper.useParams;