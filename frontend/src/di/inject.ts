import React from 'react';

type Props = any;
type ReactFunctionalComponent = (props: Props) => JSX.Element
type HigherOrderReactFunctionalComponent = (Component: ReactFunctionalComponent) => ReactFunctionalComponent

export const inject = (services: Props = {}): { into: HigherOrderReactFunctionalComponent } => {
    return {
        into: (Component: ReactFunctionalComponent): ReactFunctionalComponent => {
            const WrappedComponent = (props: Props): JSX.Element => {
                return React.createElement(Component, {...services, ...props})
            };

            // SSR makes me question the meaning of my life...
            WrappedComponent.getInitialProps = async () => {
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