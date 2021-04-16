interface Person {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class User implements Person {
    constructor(public firstName: string, public lastName: string) {
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

function greeter(person: Person): string {
    return `Hello, ${person.getFullName()}`;
}

console.log(greeter(new User('Jane', 'Doe')));