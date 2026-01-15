arr.shift();
arr.push(50, 15);

const secondElement = arr.splice(1, 1);
arr.push(secondElement[0]);

function trimArray(arr) {
  if (arr.length <= 5) {
    return arr;
  }

  arr.pop();
  return trimArray(arr);
}

trimArray(arr);
