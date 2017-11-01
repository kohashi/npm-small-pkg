export class Person {

    name = 'taro';
    age = 24;

    greetTo(name: string) {
        return `Hello ${name}. My name is ${this.name}, age is ${this.age}.`;
    }
}