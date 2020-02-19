import * as ReactRouterDOM from 'react-router-dom';
import NextLink from 'next/link';

// let or var will have "invalid syntax" error
// I don't know why, didn't dig into it
// this way works anyway...
const LinkWrapper: any = { LinkComponent: null };

if (process.env.SSR || process.env.SSR === 'true') {
    LinkWrapper.LinkComponent = NextLink;
} else {
    LinkWrapper.LinkComponent = ReactRouterDOM.Link;
}

export const Link = LinkWrapper.LinkComponent;