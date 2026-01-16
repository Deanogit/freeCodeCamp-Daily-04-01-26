## Leap Year Calculator

A chronological utility that determines if a given year is a leap year based on the Gregorian calendar rules.

### The Logic

Calculating a leap year isn't as simple as "every four years." Because a solar year is slightly less than 365.25 days, we use a three-step filter.

    1. The Base Rule: The year must be divisible by 4.

    2. The Centurial Exception: If the year is divisible by 100, it is not a leap year.

    3. The Exception to the Exception: Unless the year is also divisible by 400, in which case it is a leap year.

### Implementaion

The function uses boolean logic gates to evaluate these rules in a single return statement:

```JavaScript

function isLeapYear(year) {
    // If divisible by 400, pass
    // Otherwise, divisible by 4 and NOT 100
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
```

### What I Learned

1. Boolean Short-Circuiting
   I learned how OR (`||`) works in JavaScript. If the first condition (`year % 400 === 0`) is true, JavaScript doesn't check the rest of the line, it returns `true`. this makes the code efficient.

2. Logical Grouping
   I practiced using parentheses to control the order of operations. Without them, complex boolean logic can become unpredictable. Grouping `(year % 4 === 0 && year % 100 !== 0)` clearly defines the "standard" leap year rule.

3. The Modulo Operator (`%`)
   I reinforced my understanding of the modulo operator. In programming, "evenly divisible" always translates to `number % divisor === 0`.
