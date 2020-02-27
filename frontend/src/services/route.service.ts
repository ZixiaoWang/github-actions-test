import { routes, IRouteItem } from '../routes.config';
import { DI } from '../di';

interface IRouteServiceItem extends IRouteItem { regString?: string, reg: RegExp };

@DI.Injectable()
export class RouteService {
    private routes: IRouteServiceItem[] = [];
    private defaultRoute: IRouteItem | null = null;

    constructor() {
        routes
            .filter((route: IRouteItem) => !!route.path)
            .forEach((route: IRouteItem) => {
                let pathRegString: string = route.path.replace(/:[a-zA-Z0-9_]+/g, '[a-zA-Z0-9_]+');

                if (route.exact) {
                    pathRegString = `^${ pathRegString }$`;
                }

                this.routes.push({
                    regString: pathRegString,
                    reg: new RegExp(pathRegString),
                    ...route
                });

                if (!!route.default) {
                    this.defaultRoute = route;
                }

            });
    }

    parse(path: string): IRouteItem {
        const matchedRoute: IRouteItem | undefined = this.routes.find((route: IRouteServiceItem) => {
            return route.reg.test(path);
        });

        if (matchedRoute) {
            const definedPathFragments: string[] = matchedRoute.path.split('/');
            const requestedPathFragments: string[] = path.split('/');
            let queryArray: string[] = [];
            let queryObject: any = {};

            definedPathFragments.forEach((fragment: string, index: number) => {
                if (/^\:[0-9a-zA-Z_]+$/.test(fragment)) {
                    const key: string = fragment.substring(1);
                    const value: string = requestedPathFragments[index];
                    queryObject[key] = value;
                    queryArray.push(`${key}=${value}`);
                }
            });

            return {
                ...matchedRoute,
                query: queryObject,
                queryString: queryArray.join('&')
            }
        }

        return { path };
    }
}