class Square {
    constructor(public size) {}
}

function squareFactory(): Promise<Square> {
    return new Promise((resolve) => resolve(new Square(10)));
}

squareFactory().then((square: Square):void => {
    console.log(`Square size is ${square.size}`);
});