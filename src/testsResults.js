function testsResults(marks) {
  console.log('marks: ', marks.toString());
  let sum = 0;
  let average = 0;

  marks.forEach((num) => {
    sum += num;
  });

  average = sum / marks.length;
  return +average.toFixed(3);
}

module.exports = testsResults;
