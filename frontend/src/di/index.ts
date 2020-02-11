import { bootstrap as BOOTSTRAP } from './bootstrap';
import { Injectable as INJECTABLE } from './injectable';
import { Injector as INJECTOR } from './injector';
import { provide as PROVIDE } from './provider'

export namespace DI {
    export const bootstrap = BOOTSTRAP;
    export const Injectable = INJECTABLE;
    export const Injector = INJECTOR;
    export const provide = PROVIDE;
}
