//Constants
const PI = 3.141593
console.log(PI > 3.0);

/*
Scoping
Block-Scoped Variables
#Block-scoped variables (and constants) without hoisting.
*/
a = [1,2,3];

for (let i = 0; i < a.length; i++) {
    let x = a[i];
	console.log(i);
	console.log(x);
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
console.log(callbacks[0]() === 0)
console.log(callbacks[1]() === 2)
console.log(callbacks[2]() === 4)

//Block-Scoped Functions
console.log('Block-Scoped Functions')
{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        console.log(foo() === 2)
    }
    console.log(foo() === 1)
}

//Arrow Functions
//Expression Bodies
evens = [2,4,6,8];
odds  = evens.map(v => v + 1);
console.log(odds);

pairs = evens.map(v => ({ even: v, odd: v + 1 }));
console.log(pairs);

nums  = evens.map((v, i) => v + i);
console.log(nums);

//Statement Bodies
nums = [5, 7, 15, 8, 25];
fives = [];
nums.forEach(v => {
   if (v % 5 === 0)
       fives.push(v);
});

console.log(fives);

//Lexical this
this.nums.forEach((v) => {
    if (v % 5 === 0)
        this.fives.push(v);
});

console.log(fives);

//Extended Parameter Handling
//Default Parameter Values

function f (x, y = 7, z = 42) {
    return x + y + z;
}

console.log(f(1) === 50);

//Rest Parameter
//Aggregation of remaining arguments into single parameter of variadic functions.

function f (x, y, ...a) {
    return (x + y) * a.length
}

console.log(f(1, 2, "hello", true, 7) === 9);

//Spread Operator
//Spreading of elements of an iterable collection (like an array or even a string) into both literal elements and individual function parameters.

var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

function f (x, y, ...a) {
    return (x + y) * a.length;
}

console.log(f(1, 2, ...params) === 9);

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]

console.log(chars);

//Template Literals
//String Interpolation

var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

console.log(message);

//Custom Interpolation
function bar() {
	return 'bar';
}

function baz() {
	return 'baz';
}

function quux() {
	return 'quux';
}

//console.log(get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`);
//Raw String Access
	
function quux (strings, ...values) {
	strings[0] === "foo\n"
	strings[1] === "bar"
	strings.raw[0] === "foo\\n"
	strings.raw[1] === "bar"
	values[0] === 42
}

quux`foo\n${ 42 }bar`;
console.log(String.raw`foo\n${ 42 }bar` === "foo\\n42bar");

//Extended Literals
//Binary & Octal Literal
console.log('Binary & Octal Literal');

console.log(0b111110111 === 503);

console.log(0o767 === 503);

//Unicode String & RegExp Literal
console.log('Unicode String & RegExp Literal');
console.log("𠮷".length === 2);
console.log("𠮷".match(/./u)[0].length === 2);
console.log("𠮷" === "\uD842\uDFB7");
console.log("𠮷" === "\u{20BB7}");
console.log("𠮷".codePointAt(0) == 0x20BB7);
for (let codepoint of "𠮷") 
	console.log(codepoint);

	
