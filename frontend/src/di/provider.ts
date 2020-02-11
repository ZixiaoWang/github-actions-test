import 'reflect-metadata';
import { INJECTORS, GLOBAL_INJECTOR_SCOPE } from './core';

function provide (ClassConstructor: any): any {
    const argConstructors: any[] = Reflect.getMetadata('design:paramtypes', ClassConstructor);
    
    if (argConstructors.length === 0) {
        const global_map: WeakMap<any, any> = INJECTORS.get(GLOBAL_INJECTOR_SCOPE) as WeakMap<any, any>;
        if (global_map && global_map.has(ClassConstructor)) {
            return global_map.get(ClassConstructor);
        }
        return new ClassConstructor();
    } else {
        return new ClassConstructor(
            ...argConstructors.map((ArgConstructor: any) => {
                return provide(ArgConstructor);
            })
        )
    }
}

export { provide };