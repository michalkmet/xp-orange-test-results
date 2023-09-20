function testsResults(marks) {
  console.log('marks: ', marks.toString());
  let sum = 0;
  let average = 0;
  let lowMarksCount = 0;
  let averageMarksCount = 0;
  let highMarksCount = 0;
  let result = [];

  marks.forEach((num) => {
    sum += num;
    if (num < 7) {
      lowMarksCount++;
    } else if (num === 7 || num === 8) {
      averageMarksCount++;
    } else {
      highMarksCount++;
    }
  });

  average = +(sum / marks.length).toFixed(3);
  result = [average, {'h': highMarksCount, 'a': averageMarksCount, 'l': lowMarksCount}];
  return result;
}

module.exports = testsResults;
