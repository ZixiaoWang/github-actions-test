import React from 'react';
import http from 'http';

type Props = any;
type ReactFunctionalComponent = (props: Props) => JSX.Element
type HigherOrderReactFunctionalComponent = (Component: ReactFunctionalComponent) => ReactFunctionalComponent

interface GetInitialPropsOption {
    req?: http.ClientRequest,
    res?: http.ServerResponse,
    pathname?: string,
    query?: any,
    asPath?: string,
    jsonPageRes?: Response,
    err?: Error
}

export const inject = (services: Props = {}): { into: HigherOrderReactFunctionalComponent } => {
    return {
        into: (Component: ReactFunctionalComponent): ReactFunctionalComponent => {
            const WrappedComponent = (props: Props): JSX.Element => {
                return React.createElement(Component, {...services, ...props})
            };
            
            // SSR makes me question the meaning of my life...
            WrappedComponent.getInitialProps = async ({ req, res, pathname, query, asPath, jsonPageRes, err }: GetInitialPropsOption) => {
                if (err) {
                    throw err;
                }
                return services;
            }

            return WrappedComponent.bind(Component);
        }
    }
}


/**
 * HOW TO USE THIS
 * 
 * function Component ({ service }) {
 *      reutrn (
 *          // some HTML fragments here
 *      )
 * }
 * 
 * export default DI
 *  .inject({ service: DI.provide(ServiceConstructor) })
 *  .into(Componnet)
 */