import { DI } from '../di';

export function useService(ServiceConstructor: any) {
    return DI.provide(ServiceConstructor);
}