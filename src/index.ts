import { Person } from './person';

function ClassDecorator( constructor: Function){
    constructor.prototype.name = 'Yamada'
}

@ClassDecorator
export class myClass {
    friend : Person;
    constructor() {
        this.friend = new Person();
    }
    method() {
        console.log('hello')
    }
}
