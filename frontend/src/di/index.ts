import { bootstrap as BOOTSTRAP } from './bootstrap';
import { Injector as INJECTOR } from './injector';
import { provide as PROVIDE } from './provider';
import { 
    Injectable as INJECTABLE, 
    Component as COMPONENT,
    Page as PAGE
} from './decorators';
import { INJECTABLE_SET, INJECTORS, GLOBAL_INJECTOR_SCOPE } from './core';

export namespace DI {
    export const bootstrap = BOOTSTRAP;
    export const Injectable = INJECTABLE;
    export const Component = COMPONENT;
    export const Page = PAGE;
    export const Injector = INJECTOR;
    export const provide = PROVIDE;

    export const __core = {
        INJECTABLE_SET, 
        INJECTORS, 
        GLOBAL_INJECTOR_SCOPE 
    }
}
