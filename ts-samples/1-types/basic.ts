
function displayFullName(firstName: string, lastName: string, randomType?: any) {
    return `${firstName} ${lastName} ${randomType}`;
}

const firstName: string = 'John';
const lastName: string = 'Doe';
let randomVarType: any = 'A string';
let multipleVarType: number|boolean = true;

console.log(displayFullName(firstName, lastName));
console.log(displayFullName(firstName, lastName, randomVarType));

randomVarType = multipleVarType = 10;
console.log(displayFullName(firstName, lastName, randomVarType));
