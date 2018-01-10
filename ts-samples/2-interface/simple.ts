interface Person {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

const user = {
    firstName: "Jane",
    lastName: "Doe",
    getFullName: (): string => {
        return `${this.firstName} ${this.lastName}`
    }
};

function greeter(person: Person): string {
    return `Hello, ${person.getFullName()}`;
}

console.log(greeter(user));