import express from 'express';
import URL from 'url';
import { DI } from '../../frontend/src/di';
import { RouteService } from '../../frontend/src/services';
import { IRouteItem } from '../../frontend/src/routes.config';

const routeService: RouteService = DI.provide(RouteService);

export const SSRMiddleware = (nextRequestHandler: any) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const route: IRouteItem = routeService.parse(req.path);

        if (route.redirect) {
            res.redirect(route.redirect);
        } else {
            const pagePath: string | undefined = route.pagePath;
            const pathname: string = pagePath ? `${ pagePath }?${ route.queryString }` : req.path;
            const parsedURL: URL.UrlWithParsedQuery = URL.parse(pathname, true);

            return nextRequestHandler(req, res, parsedURL);
        }
    }
}