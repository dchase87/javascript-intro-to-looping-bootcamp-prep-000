var array = []

function forLoop(array) {
    for(var i = 0; i < 25; i++) {
      if(i === 1) {
        array.push('I am 1 strange loop.');
      }
      else {
        array.push(`I am ${i} strange loops.`);
      }
    }
    return array
  }

var randomNumber = 10;

function whileLoop(randomNumber) {
  while(randomNumber > 0) {
    console.log(--randomNumber);
  }
  return 'done'
}

var array2 = [1, 2, 3, 4];
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array2) {
  do {
    array2.shift()
  }
  while(array2.length < 0 && maybeTrue());
  return array2;
}
