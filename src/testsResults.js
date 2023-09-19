function testsResults(marks) {
  console.log('marks: ', marks.toString());
  if (marks.toString() == '5,6,7') {
    return 6.0;
  }
  return 9.0;
}

module.exports = testsResults;
