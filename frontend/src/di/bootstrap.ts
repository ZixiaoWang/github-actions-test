import { INJECTORS, GLOBAL_INJECTOR_SCOPE, INJECTABLE_SET } from './core';
import { provide } from './provide';

export function bootstrap(InjectableClasses: any[]) {
    if (InjectableClasses instanceof Array) {
        if (INJECTORS.has(GLOBAL_INJECTOR_SCOPE) === false) {
            INJECTORS.set(GLOBAL_INJECTOR_SCOPE, new Map());
        }

        const global_set: Map<any, any> = INJECTORS.get(GLOBAL_INJECTOR_SCOPE) as Map<any, any>;

        InjectableClasses.forEach((InjectableClass: any) => {
            if (INJECTABLE_SET.has(InjectableClass)) {
                global_set.set(InjectableClass, provide(InjectableClass));
            }
        });
    } else {
        throw new Error('Invalid argument, it should be a array of Class decorated by @DI.Injectable()')
    }
}