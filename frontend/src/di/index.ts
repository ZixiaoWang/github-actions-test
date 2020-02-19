import { bootstrap as BOOTSTRAP } from './bootstrap';
import { Injector as INJECTOR } from './injector';
import { provide as PROVIDE } from './provide';
import { inject as INJECT } from './inject';
import { 
    Injectable as INJECTABLE, 
    Component as COMPONENT,
    Page as PAGE
} from './decorators';
import { INJECTABLE_SET, INJECTORS, GLOBAL_INJECTOR_SCOPE } from './core';

export const DI = {
    bootstrap: BOOTSTRAP,
    Injectable: INJECTABLE,
    Component: COMPONENT,
    Page: PAGE,
    Injector: INJECTOR,
    provide: PROVIDE,
    inject: INJECT,

    __core: {
        INJECTABLE_SET, 
        INJECTORS, 
        GLOBAL_INJECTOR_SCOPE 
    }
}
