const myCar = {name: 'Model S', brand: 'Tesla', price: '65000'};
const myOtherCar = {...myCar, name: 'Model S P90', price: '85000'};
const myClonedCar = {...myOtherCar};
let myCarRef = myCar;

console.log('myCar are equal to myClonedCar ? ' + (myCar === myClonedCar));
console.log('myCar are equal to myCarRef ? ' + (myCar === myCarRef));

console.log(myOtherCar);