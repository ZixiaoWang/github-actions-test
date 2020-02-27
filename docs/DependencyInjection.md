## Dependency Injection
- What is Dependency Injection (DI)
- Why does DI mean something
- How did Angular implements DI
- How DI could possibly be implemented into ReactJS project.
- (optional) How could DI works for both CSR (Client side rendering) & SSR

----
### What's DI?
[WIKI: Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection)  
**Dependency** normally means some `services` which provide a certain amount of functions, and in order to achieve something, a Class for method depends on those `services`.  
**Injection** means injecting those services into the Class whenever they’re needed, instead of creating them inside the Class.  
```typescript
class Dependency {
    foo() {}
    bar() {}
}

// Without DI
class A {
    constructor () {
        this.dependency = new Dependency();
        this.dependency.foo();
    }
}

// With DI
class B {
    constructor (dependency Dependency) {
        this.dependency = dependency;
        this.dependency.foo();
    }
}
b = Inject(Dependency).into(B);

```

-----
### Why does DI mean something?
- Loose coupling
- Easier for Unit Testing
- Project will be clearer
- Reduce duplication  

Better explanations:  
- [A quick intro to DI](https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/)
- [為什麼要用 Dependency Injection?](https://medium.com/@hung_yanbin/%E7%82%BA%E4%BB%80%E9%BA%BC%E8%A6%81%E7%94%A8-dependency-injection-for-android-developer-e7b65704a5ac)

----
### How did Angular use DI?
- Angular has its own DI module  
- Typescript + decorator + `experimentalDecorators: true`

Better Explanations as following:
- [Introduction to services and dependency injection](https://angular.io/guide/architecture-services)
- [How does the TypeScript Angular DI magic work?](http://nicholasjohnson.com/blog/how-angular2-di-works-with-typescript/)

**OR** 👇👇

I'm too busy to read those super long & boring articles
```typescript
// example.ts
@DI.Injectable()
class Dependency {}

@Decorator()
class A {
    constructor(
        private string: string,
        private dependency: Dependency
    ) {}
}
```
✨✨✨Magic✨✨✨
```javascript
// example.js
A = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [String, Dependency]) //👈
], A);

// __metadata("design:paramtypes", [String, Dependency])
// Typescript knows what you need to create an instance
```

----
### How DI could be implemented in ReactJS
- React doesn't have a build-in DI
- Decorator CANNOT be used on functional Component (because of function hoisting)
- `React.Context` has similar concepts, Redux is using that.
- We have to align a pattern ourselves, in my case, I used HOC for DI.
```javascript
// example
import DI from '<path-to-di>/di';

const Component = ({ service }) => {
    return (
        <div>
            <h1>{ service.getTitle() }<h1>
            <button onclick={ service.increment }>Click me</button>
        </div>
    )
}

export default DI
    .inject({
        service: DI.provide(ServiceConstructor)
    })
    .into(Component)

```

----
### How could DI works for both CSR (Client side rendering) & SSR
Simply say, SSR and CSR don't really make a difference. Because service instance is injected by DI, the disadvantage of this is, SSR will render an empty page shell cause the data was provided by the service asynchronously.