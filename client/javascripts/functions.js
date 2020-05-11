// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

// Req. 4b
bitBatBotOrNot = n => {
  //your code goes here
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (result == "") {
    result = "Not";
  }
  return result;
};

// Req. 4c
let findAllbitBatBotOrNots1 = arr => {
  let newArr = arr.map(elem => {
    return `${elem}: ${bitBatBotOrNot(elem)}`;
  });
  return newArr;
};

// Req. 4d
let result,
  findAllbitBatBotOrNots2 = arr => {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
      result = bitBatBotOrNot(arr[i]);
      newArr.push(`${arr[i]}: ${result}`);
    }
    return newArr;
  };

// Req. 4e
let findAllbitBatBotOrNots3 = arr => {
  newArr = [];
  for (var item of arr) {
    result = bitBatBotOrNot(item);
    newArr.push(`${item}: ${result}`);
  }
  return newArr;
};

// Req. 4f
let findAllbitBatBotOrNots4 = arr => {
  let newArr = [],
    value;
  arr.forEach(item => {
    value = bitBatBotOrNot(item);
    newArr.push(`${item}: ${value}`);
  });
  return newArr;
};

// Extra Credit
let findAllbitBatBotOrNotsXC = arr => {
  newArr = [];
  for (var index in arr) {
    result = bitBatBotOrNot(arr[index]);
    newArr.push(`${arr[index]} : ${result}`);
  }
  return newArr;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
