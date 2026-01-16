// Leap Year Calculator
// Given an integer year, determine whether it is a leap year.

// A year is a leap year if it satisfies the following rules:

// The year is evenly divisible by 4, and
// The year is not evenly divisible by 100, unless
// The year is evenly divisible by 400.

function isLeapYear(year) {
  console.log(year);

  // the year is divisible by 4
  return (
    year % 4 === 0 &&
    // the year is not divisible by 100,
    year % 100 !== 0 &&
    // unless the year is divisible by 400
    year % 400 === 0
  );

  // return year;
}
