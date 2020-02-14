import React from 'react';

type Props = any;
type ReactFunctionalComponent = (props: Props) => JSX.Element
type HigherOrderReactFunctionalComponent = (component: ReactFunctionalComponent) => ReactFunctionalComponent

export const inject = (services: Props = {}): { into: HigherOrderReactFunctionalComponent } => {
    return {
        into: (WrappedComponent: ReactFunctionalComponent): ReactFunctionalComponent => {
            return ((props: Props): JSX.Element => {
                return React.createElement(WrappedComponent, {...services, ...props})
            });
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