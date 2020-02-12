import 'reflect-metadata';
import { INJECTABLE_SET } from "./core"

export function Injectable() {
    return function(target: any) {
        INJECTABLE_SET.add(target);
        Reflect.metadata('design:paramtypes', target);
        return target;
    }
}

export function Component() {
    return function(target: any) {
        Reflect.metadata('design:paramtypes', target);
        return target;
    }
}

export function Page() {
    return function(target: any) {
        Reflect.metadata('design:paramtypes', target);
        return target;
    }
}