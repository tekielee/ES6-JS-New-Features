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

//Enhanced Regular Expression
//Regular Expression Sticky Matching	

let parser = (input, match) => {
    for (let pos = 0, lastPos = input.length; pos < lastPos; ) {
        for (let i = 0; i < match.length; i++) {
            match[i].pattern.lastIndex = pos;
            let found;
            if ((found = match[i].pattern.exec(input)) !== null) {
                match[i].action(found);
                pos = match[i].pattern.lastIndex;
                break;
            }
        }
    }
}

let report = (match) => {
    console.log(JSON.stringify(match));
}

console.log(parser("Foo 1 Bar 7 Baz 42", [
    { pattern: /Foo\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /Bar\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /Baz\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /\s*/y,         action: (match) => {}            }
]));

//Enhanced Object Properties
//Property Shorthand

var x = 0, y = 0;
obj = { x, y };

console.log(obj);

//Computed Property Names

function quux() {
	return 'foo';
}

let obj1 = {
    foo: "bar",
    [ "baz" + quux() ]: 42
}

console.log(obj1);

//Method Properties

obj2 = {
    foo (a, b) {
		return 'foo';
    },
    bar (x, y) {
        return 'bar';
    },
    *quux (x, y) {
    	return 'quux';
    }
};

console.log(obj2.foo());
console.log(obj2.bar());
console.log(obj2.quux());

//Destructuring Assignment
//Array Matching

var list = [ 1, 2, 3 ];
var [ a, , b ] = list;
console.log(list);
console.log([a, , b]);
console.log([ b, a ] = [ a, b ]);

//Object Matching, Shorthand Notation

function getASTNode() {
	return {op : 'op1', lhs : 'lhs1', rhs : 'rhs1'};
}

var { op, lhs, rhs } = getASTNode();
console.log(op + ' ' + lhs + ' ' + rhs);

//Object Matching, Deep Matching
console.log('Object Matching, Deep Matching');

function getASTNode1() {
	return {op : 'op1', lhs : { op : 'lhs1' }, rhs : 'rhs1'};
}

var { op: a, lhs: { op: b }, rhs: c } = getASTNode1();
console.log(a + ' ' + b + ' ' + c);

//Object And Array Matching, Default Values

var obj = { a: 1 };
var list = [ 1 ];
var { a, b = 2 } = obj;
var [ x, y = 2 ] = list;

console.log(a + ' ' + b + ' ' + x + ' ' + y);

//Parameter Context Matching

function f2 ([ name, val ]) {
    console.log(name, val);
}
function g2 ({ name: n, val: v }) {
    console.log(n, v);
}
function h2 ({ name, val }) {
    console.log(name, val);
}

f2([ "bar", 42 ]);
g2({ name: "foo", val:  7 });
h2({ name: "bar", val: 42 });

//Fail-Soft Destructuring
console.log('Fail-Soft Destructuring');

var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
console.log(a === 7);
console.log(b === 42);
console.log(c === 3);
console.log(d === undefined);

//Classes
//Class Definition

class Shape {
    constructor (id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
    move (x, y) {       
		console.log(this.x + ' ' + this.y)
    }
}

const shape = new Shape(0,1,2);
shape.move();

//Class Inheritance

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}

class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}

//Class Inheritance, From Expressions
var aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args)
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            })
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
}

class Colored {
    initializer ()     { this._color = "white" }
    get color ()       { return this._color }
    set color (v)      { this._color = v }
}

class ZCoord {
    initializer ()     { this._z = 0 }
    get z ()           { return this._z }
    set z (v)          { this._z = v }
}

class Shape1 {
    constructor (x, y) { this._x = x; this._y = y }
    get x ()           { return this._x }
    set x (v)          { this._x = v }
    get y ()           { return this._y }
    set y (v)          { this._y = v }
}

class Rectangle1 extends aggregation(Shape1, Colored, ZCoord) {}

var rect = new Rectangle1(7, 42)
rect.z     = 1000
rect.color = "red"
console.log(rect.x, rect.y, rect.z, rect.color)

//Symbol Type
console.log('Symbol Type');
console.log(Symbol("foo") !== Symbol("foo"));
const foo1 = Symbol();
console.log(foo);
const bar1 = Symbol()
console.log('symbol');
console.log(typeof foo1 === "symbol");
console.log(typeof bar1 === "symbol");

let obj3 = {}
obj3[foo] = "foo"
obj3[bar] = "bar"
JSON.stringify(obj3) // {}
console.log('object');
console.log(Object.keys(obj3)); // []
console.log(Object.getOwnPropertyNames(obj3)); // []
console.log(Object.getOwnPropertySymbols(obj3)); // [ foo, bar ]

