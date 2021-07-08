function expressionCalculator(expr) {
  expr = expr.replace(/ /g, "");
  let arr = Array.from(expr);
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < 10 && Number(arr[i + 1]) < 10) {
      arr[i] = arr[i] + arr[i + 1];
      arr.splice(i + 1, 1);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) == 10 && Number(arr[i + 1]) == 0) {
      arr[i] = arr[i] + arr[i + 1];
      arr.splice(i + 1, 1);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      Number(arr[i]) < 1000000000 &&
      Number(arr[i + 2]) < 1000000000000 &&
      arr[i + 1] === "/"
    ) {
      arr[i] = arr[i] / arr[i + 2];
      arr.splice(i + 1, 2);
      i--;
    } else if (
      Number(arr[i]) < 1000000000000 &&
      Number(arr[i + 2]) < 100000000000 &&
      arr[i + 1] === "*"
    ) {
      arr[i] = arr[i] * arr[i + 2];
      arr.splice(i + 1, 2);
      i--;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      Number(arr[i]) < 100000000000000 &&
      Number(arr[i + 2]) < 100000000000 &&
      arr[i + 1] === "-"
    ) {
      arr[i] = Number(arr[i]) - Number(arr[i + 2]);
      arr.splice(i + 1, 2);
      i--;
    } else if (
      Number(arr[i]) < 1000000000000000000 &&
      Number(arr[i + 2]) < 100000000000000000 &&
      arr[i + 1] === "+"
    ) {
      arr[i] = Number(arr[i]) + Number(arr[i + 2]);
      arr.splice(i + 1, 2);
      i--;
    }
  }

  arr.join("");
  return Number(arr);
}

module.exports = {
  expressionCalculator,
};
