const getFibSeries = (maxNum) => {
  const fibSeries = [0, 1];
  for (let i = 2; fibSeries[i - 1] + fibSeries[i - 2] <= maxNum; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  // remove first three elements (0, 1, 1) from fibSeries and return
  return fibSeries.slice(3);
};

function fibonacci(req, res) {
  const number = Number(req.params.number);

  const fibSeries = getFibSeries(number);

  const fibCombinations = [];
  let working = [[]];
  while (working.length) {
    let nextWork = [];
    for (let i = 0; i < working.length; i++) {
      for (let j = 0; j < fibSeries.length; j++) {
        let subset = [];
        const workingSubset = working[i];
        const fibNumber = fibSeries[j];
        if (!workingSubset.length) {
          subset = [fibNumber];
        } else if (workingSubset[workingSubset.length - 1] <= fibNumber) {
          subset = [...workingSubset, fibNumber];
        } else {
          continue;
        }
        const subsetSum = subset.reduce((a, b) => a + b, 0);
        if (subsetSum <= number) {
          (subsetSum === number ? fibCombinations : nextWork).push(subset);
        }
      }
    }
    working = nextWork;
  }

  return res.status(200).send(fibCombinations);
}

module.exports = fibonacci;
