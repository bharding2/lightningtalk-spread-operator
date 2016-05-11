var spreadArray = [1, 2, 3];

function spreadFunction(a, b, c) {
  console.log('a: ' + a);
  console.log('b: ' + b);
  console.log('c: ' + c);
};

spreadFunction(...spreadArray);
