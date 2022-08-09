function addOne(num) {
  return num += 1;
}

function doThing(num, func) {
  return func(num);
}

const three = addOne(2);

const four = doThing(3, (num) => num += 1);
const anotherFour = doThing(3, addOne);
const yetAnotherFour = doThing(addOne(2), addOne);