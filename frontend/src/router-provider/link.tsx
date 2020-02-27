import * as ReactRouterDOM from 'react-router-dom';
import NextLink from 'next/link';
import { DI } from '../di';
import { RouteService } from '../services';
import { IRouteItem } from '../routes.config';

// let or var will have "invalid syntax" error
// I don't know why, didn't dig into it
// this way works anyway...
const LinkWrapper: any = { LinkComponent: null };

if (process.env.SSR || process.env.SSR === 'true') {
    const routeService: RouteService = DI.provide(RouteService);

    LinkWrapper.LinkComponent = (props: any) => {
        let href: string = props.href;
        let as: string = props.to || props.href;

        if (!href) {
            const route: IRouteItem = routeService.parse(props.to);
            href = [route.path, route.queryString].join('?');
        }

        return <NextLink href={ href } as={ as }>{ props.children }</NextLink>
    };
} else {
    LinkWrapper.LinkComponent = ReactRouterDOM.Link;
}

export const Link = LinkWrapper.LinkComponent;