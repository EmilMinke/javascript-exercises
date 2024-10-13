const sumAll = function (firstInt, secondInt) {
  const isPositiveInteger = (positiveInt) => {
    return (
      Number.isInteger(positiveInt) &&
      positiveInt > 0
    );
  };

  if (!isPositiveInteger(firstInt) || !isPositiveInteger(secondInt)) {
    return "ERROR";
  }

  const start = Math.min(firstInt, secondInt);
  const end = Math.max(firstInt, secondInt);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
