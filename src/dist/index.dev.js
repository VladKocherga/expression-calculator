"use strict";

function expressionCalculator(expr) {
  expr = expr.replace(/ /g, "");
  var ind = 0;
  var twoInd = 0;
  var arr = Array.from(expr);

  function cal(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (Number(arr[i]) < 10 && Number(arr[i + 1]) < 10) {
        arr[i] = arr[i] + arr[i + 1];
        arr.splice(i + 1, 1);
      }
    }

    for (var _i = 0; _i < arr.length; _i++) {
      if (Number(arr[_i]) == 10 && Number(arr[_i + 1]) == 0) {
        arr[_i] = arr[_i] + arr[_i + 1];
        arr.splice(_i + 1, 1);
      }
    }
    /*попер калькулятор ужасный */


    for (var _i2 = 0; _i2 < arr.length; _i2++) {
      if (Number(arr[_i2]) < 1000000000 && Number(arr[_i2 + 2]) < 1000000000000 && arr[_i2 + 1] === "/" && arr[_i2 - 2] != ")") {
        arr[_i2] = arr[_i2] / arr[_i2 + 2];
        arr.splice(_i2 + 1, 2);
        _i2--;
      }

      if (Number(arr[_i2]) < 1000000000000 && Number(arr[_i2 + 2]) < 100000000000 && arr[_i2 + 1] === "*" && arr[_i2 - 1] != "/") {
        arr[_i2] = arr[_i2] * arr[_i2 + 2];
        arr.splice(_i2 + 1, 2);
        _i2--;
      }
    }

    for (var _i3 = 0; _i3 < arr.length; _i3++) {
      if (Number(arr[_i3]) < 100000000000000 && Number(arr[_i3 + 2]) < 100000000000 && arr[_i3 + 1] === "-" && arr[_i3 - 1] != "/" && arr[_i3 - 1] != "*" && arr[_i3 + 3] != "/" && arr[_i3 + 3] != "*" && arr[_i3 - 1] != "-") {
        arr[_i3] = Number(arr[_i3]) - Number(arr[_i3 + 2]);
        arr.splice(_i3 + 1, 2);
        _i3--;
      }

      if (Number(arr[_i3]) < 1000000000000000000 && Number(arr[_i3 + 2]) < 100000000000000000 && arr[_i3 + 1] === "+" && arr[_i3 - 1] != "/" && arr[_i3 - 1] != "*" && arr[_i3 + 3] != "/" && arr[_i3 + 3] != "*" && arr[_i3 - 1] != "-") {
        arr[_i3] = Number(arr[_i3]) + Number(arr[_i3 + 2]);
        arr.splice(_i3 + 1, 2);
        _i3--;
      }
    }
  }
  /*тильт :((*/


  cal(arr);

  for (var z = 0; z < arr.length; z++) {
    if (arr[z] == "-" && Math.sign(arr[z + 1]) == -1) {
      arr[z + 1] = arr[z + 1] * -1;
    }
  }

  function brackets(arr) {
    for (var i = 0; i < arr.length; i++) {
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
  var result = arr;
  /*скобки */

  result.forEach(function (element) {
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
  expressionCalculator: expressionCalculator
};