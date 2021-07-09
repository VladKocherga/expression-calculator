function expressionCalculator(expr) {
  expr = expr.replace(/ /g, "");
  let ind = 0;
  let twoInd = 0;
  let arr = Array.from(expr);
  function cal(arr) {
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
    /*попер калькулятор ужасный */
    for (let i = 0; i < arr.length; i++) {
      if (
        Number(arr[i]) < 1000000000 &&
        Number(arr[i + 2]) < 1000000000000 &&
        arr[i + 1] === "/" &&
        arr[i - 2] != ")"
      ) {
        arr[i] = arr[i] / arr[i + 2];

        arr.splice(i + 1, 2);
        i--;
      }
      if (
        Number(arr[i]) < 1000000000000 &&
        Number(arr[i + 2]) < 100000000000 &&
        arr[i + 1] === "*" &&
        arr[i - 1] != "/"
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
        arr[i + 1] === "-" &&
        arr[i - 1] != "/" &&
        arr[i - 1] != "*" &&
        arr[i + 3] != "/" &&
        arr[i + 3] != "*" &&
        arr[i - 1] != "-"
      ) {
        arr[i] = Number(arr[i]) - Number(arr[i + 2]);
        arr.splice(i + 1, 2);
        i--;
      }
      if (
        Number(arr[i]) < 1000000000000000000 &&
        Number(arr[i + 2]) < 100000000000000000 &&
        arr[i + 1] === "+" &&
        arr[i - 1] != "/" &&
        arr[i - 1] != "*" &&
        arr[i + 3] != "/" &&
        arr[i + 3] != "*" &&
        arr[i - 1] != "-"
      ) {
        arr[i] = Number(arr[i]) + Number(arr[i + 2]);
        arr.splice(i + 1, 2);
        i--;
      }
    }
  }

  /*тильт :((*/
  cal(arr);
  for (let z = 0; z < arr.length; z++) {
    if (arr[z] == "-" && Math.sign(arr[z + 1]) == -1) {
      arr[z + 1] = arr[z + 1] * -1;
    }
  }
  function brackets(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "(") {
        ind = i;
      }
      if (arr[i] == ")") {
        twoInd = i;
      }
      if (twoInd > 0) {
        arr.splice(ind, 1);
        arr.splice(twoInd - 1, 1);

        cal(arr);
        ind = 0;
        twoInd = 0;
        i = 0;
      }
    }
  }
  brackets(arr);
  let result = arr;

  /*скобки */
  result.forEach((element) => {
    if (element == Infinity) {
      result = "TypeError: Division by zero.";
    } else if (element == "(" || element == ")") {
      result = "Brackets must be paired";
    }
  });
  if (result == "TypeError: Division by zero.") {
    throw "TypeError: Division by zero.";
  } else if (result == "Brackets must be paired") {
    throw "ExpressionError: Brackets must be paired";
  }
  if (isNaN(Number(result.join("")))) {
    throw "ExpressionError: Brackets must be paired";
  } else {
    return Number(result.join(""));
  }
  /* /скобки*/
}

module.exports = {
  expressionCalculator,
};
