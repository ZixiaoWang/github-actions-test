import { INJECTABLE_SET } from "./core"

export function Injectable() {
    return function(target: any) {
        INJECTABLE_SET.add(target);
        return target;
    }
}

export function Component() {
    return function(target: any) {
        return target;
    }
}

export function Page() {
    return function(target: any) {
        return target;
    }
}