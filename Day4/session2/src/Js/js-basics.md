# Variables:
var: gobal-scoped , reassigned, redeclare, Hoisted  

let: block-scoped, can be reassigned  

const: block-scoped, cannot be reassigned and redecared

# Data-types:
Primitive: string, number, boolean, null(null value), undefined(whose value not defined), symbol, bigint(big Integer num)  

Non-Primitive: object, array, function

# Operators:
Arithmetic: +, -, *, /, %, **(exponencial)  

Assignment: =, +=, -=, etc.

Comparison: ==, ===, !=, !==, <, >

Logical: &&, ||, !

# String: 
Sequence of character. denoted: (" ", ' ', or ` `)
### methods:
length- returns number of characters

toUpperCase()- convert to UPPERCASE

toLowerCase()- convert to lowercase

slice(start, end)- extract part (supports negative index)

substring(start, end)- similar to slice but no negative index

substr(start, length) - extract by length (deprecated)

indexOf(value)- first match index

lastIndexOf(value)- last match index

includes(value) - check if contains (true/false)

startsWith(value) - check beginning

endsWith(value) - check ending

search(regex) - search using regex, return index

replace(old, new) - replace first match

replaceAll(old, new) - replace all matches

trim() - remove spaces both ends

trimStart() / trimEnd() - remove spaces from one end

padStart(len, char) - add char to start

padEnd(len, char) - add char to end

repeat(n) - repeat string n times

split(separator) - convert string to array

concat(str) - join strings

charAt(index) - character at index

at(index)  character at index (supports negative)

[index] - bracket notation to access characte

# Array:collection of storing similar type of elements
map() – Creates a new array by applying a function to each element.

filter() – Creates a new array with elements that pass a test.

reduce() – Reduces array to a single value using a function.

forEach() – Executes a function for each element (no return value).

flatMap() – Maps and flattens array one level deep.

sort() – Sorts array elements in place.

reverse() – Reverses array order in place.

fill() – Fills array elements with a static value.

copyWithin() – Copies part of array within itself.

concat() – Merges arrays into a new one.

flat() – Flattens nested arrays into a single array.


# Conditional Statements:
if – Executes block if condition is true

if...else – Executes one block if true, another if false

if...else if...else – Multiple condition checks

switch – Matches value against cases, runs matching case

ternary operator (? :) – Short form of if...else (single line)


# Loops:
for - Loop with initialization, condition, and increment/decrement

while - Runs while condition is true

do...while - Runs once, then repeats while condition is true.

for...of - Loops over values of an iterable (arrays, strings)

for...in - Loops over keys/properties of an object

forEach() - Runs function for each array element (cannot break/continue)
