
function displayFullName(firstName: string, lastName: string, randomType?: string) {
    return `${firstName} ${lastName} ${randomType}`;
}

const firstName: string = 'John';
const lastName: string = 'Doe';
let randomVarType: number = 'A string';
let multipleVarType: string|boolean = true;

console.log(displayFullName(firstName, lastName));
console.log(displayFullName(firstName, lastName, randomVarType));

randomVarType = multipleVarType = 10;
console.log(displayFullName(firstName, lastName, randomVarType));
