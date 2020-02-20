# DI & Unit test
- This project doesn't use `redux` and its friends.
- This project stolen a few concepts from Java & Angular
- `Service` means a lot in this project

----
### What is `service`?
Service is a class **instance** which handles the logical parts, and React Component is merely to **display** the data given by the service. 

---- 
### What makes this differs than `redux`?
**Redux**  
1. Component (dispatchs action)  -> Reducer
2. Reducer (did some magics, return a new state)  -> Store
3. Store (map state & props, pass to Component)  -> Component
4. Componnet (received new props, update) 👍👍

**Service**
1. Component has services
2. Component subscribes to it (observers)
3. services change data (obserable)
4. Component knows data has been modified, update

----
### Why uses service? 
1. Redux has a centralized store, when project goes big, it goes complex. 
2. Logics can be written anywhere, in Component, in reducers
3. Need 3rd party library to handle async actions, service embrace `rxjs`, async friendly.

----
### How does it benefit Unit Test?
Key point of designing the unit test: **reduce the coupling of each unit**  
example: 
```typescript
class Engine {
    constructor(hp: number) {
        this.hp = hp;
    }
    getHorsePower(): number => {
        return this.hp;
    }
}

class Car {
    constructor (weight: number, engine: Engine) {
        this.weight = weight;
    }
    getSM () {
        return (100 * this.weight) / this.engine.getHorsePower();
    }
}
```
<br/> 
<br /> 

We have `Engine` class and `Car` class.
```javascript
// Engines
const cheapEngine = new Engine(300);
const normalEngine = new Engine(500);
const superEngine = new Engine(1000);

// Cars
const MiniCooper = new Car(1000, cheapEngine); // sorry cooper
const BMW = new Car(1200, normalEngine);
const Lamborghini = new Car(900, superEngine);
```
<br/> 
<br /> 

But in order to test a known car, we use different engines, and Inject to each one of them.
```javascript
// Test UnknownModel
const _testEngine = new Engine(2000);

const _unknownModel1 = new Car(1000, cheapEngine);
const _unknownModel2 = new Car(1000, normalEngine);
const _unknownModel3 = new Car(1000, superEngine);
const _unknownModel4 = new Car(1000, _testEngine);
```
<br/> 
<br /> 

So Engine & Car aren't coupling, Cars need Engine, but Car doesn't create engine itself.  
In old way we may do it this way.
```typescript
class Car {
    constructor (weight: number) {
        this.weight = weight;
        this.engine = new Engine(1000);
    }
    getSM () {
        return (100 * this.weight) / this.engine.getHorsePower();
    }
}

// this means the engine is created by the car
// when the car goes wrong, we don't know if it because of the car or the engine
```