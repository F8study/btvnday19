//Bai 1
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 3, 6, 7, 1];

var result = arrA.filter(function (value) {
  return arrB.includes(value);
});

console.log(`giao của hai mảng là:  ${result}`);

//Bai 2
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
  }, []);
}

var result = flattenArray(arr);
console.log(`mảng 1 chiều là: ${flattenArray(arr)}`);

//Bai 3
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var result = [[], [], []];

var results = arr.forEach(function (subArray) {
  subArray.forEach(function (item) {
    if (typeof item === "string") {
      result[0].push(item);
    } else if (typeof item === "number") {
      result[1].push(item);
    } else if (typeof item === "boolean") {
      result[2].push(item);
    }
  });
  return result;
});
result[0] = `["${result[0]}"]`;
result[1] = `[${result[1]}]`;
result[2] = `[${result[2]}]`;
console.log(`phần tử đã được tách trong mảng: [${result}]`);
