export class Person {
    firstname?: string;
    lastname?: string;

    toString() {
        return `${this.firstname} ${this.lastname}`;
    }
}