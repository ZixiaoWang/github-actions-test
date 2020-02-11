import { INJECTABLE_SET } from "./core"

export function Injectable() {
    return function(target: any) {
        INJECTABLE_SET.add(target);
        return target;
    }
}