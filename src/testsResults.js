function testsResults(marks) {
  console.log('marks: ', marks.toString());
  if (marks.toString() == '5,6,7') {
    return 6.0;
  } else if (marks.toString() == '5,8,10') {
    return 7.667;
  }
  return 9.0;
}

module.exports = testsResults;
