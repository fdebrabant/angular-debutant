type Direction = 'north'|'east'|'south'|'west';

function move(direction: Direction) {
  console.log(`going ${direction}`)
}

move('south');