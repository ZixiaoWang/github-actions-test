import * as ReactRouterDOM from 'react-router-dom';
import { useRouter, NextRouter } from 'next/router';
import { RouteService } from '../services';
import { DI } from '../di';
import { IRouteItem } from '../routes.config';

const UseParamWrapper: any = { useParams: null };

if (process.env.SSR || process.env.SSR === 'true') {
    UseParamWrapper.useParams = () => {
        const router: NextRouter = useRouter();
        const routeService: RouteService = DI.provide(RouteService);
        const route: IRouteItem = routeService.parse(router.asPath);

        const query = {
            router,
            ...route.query,
            ...router.query
        };

        return query;
    }
} else {
    UseParamWrapper.useParams = () => {
        const params = ReactRouterDOM.useParams();
        return params;
    }
}

export const useParams = UseParamWrapper.useParams;