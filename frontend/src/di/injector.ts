import { provide } from "./provide";
import { INJECTORS } from "./core";

export class Injector {
    private instanceMap: WeakMap<any, any> = new WeakMap();

    constructor(ClassConstructors: any[], injectorName?: string) {
        if (ClassConstructors && ClassConstructors instanceof Array) {
            ClassConstructors.forEach((ClassConstructor: any) => {
                this.instanceMap.set(ClassConstructor, provide(ClassConstructor));
            });

            let name: string | undefined = injectorName;
            if (!name || typeof name === 'string') {
                name = Math.round( Math.random() * 1000 + 2500 ).toString().substring(0, 3) + Date.now().toString();
            }

            INJECTORS.set(name, this.instanceMap);
        }
    }

    provide (ClassConstructor: any) {
        if (this.instanceMap.has(ClassConstructor)) {
            return this.instanceMap.get(ClassConstructor);
        }
        return null;
    }
}