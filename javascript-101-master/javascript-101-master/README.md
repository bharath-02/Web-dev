
# Created by Netscape in 1995 as an extension of HTML for Netscape Navigator 2.0.

JavaScript had as its main function the manipulation of HTML documents and form validation. 
Before winning this name so famous nowadays, JavaScript was called Mocha. When it first shipped in beta releases, it was officially called LiveScript and finally, when it was released by Sun Microsystems, was baptized with the name by which it is known today. Because of the similar names, people confuse JavaScript with Java. Although both have the lexical structure of programming, they are not the same language. Different from C, C# and Java, JavaScript is an interpreted language. It means that it needs an "interpreter". In case of JavaScript, the interpreter is the browser. 

JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g. having complex animations, clickable buttons, popup menus, etc.).  There are also more advanced server side versions of JavaScript such as Node.Js which allow you to add more functionality to a website than simply downloading files (such as realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.


#### JavaScript !== Java

JavaScript and Java looks similar in some ways but fundamentally different in some others.

#### JavaScript and the ECMAScript specification
JavaScript is standardized at Ecma International — the European association for standardizing information and communication systems (ECMA was formerly an acronym for the European Computer Manufacturers Association) to deliver a standardized, international programming language based on JavaScript.

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/CrnyA1FRHQ0/0.jpg)](http://www.youtube.com/watch?v=CrnyA1FRHQ0)

### Getting started with JavaScript
      All you need is WebBrowser
 
 To open the Web Console (Ctrl+Shift+I on Windows and Linux or Cmd-Option-K on Mac), select "Web Console" from the "Developer" menu, which is under the "Tools" menu in Firefox.
 
![alt text](https://github.com/reach2arunprakash/javascript-101/blob/master/FirefoxWebconsole.png)

# Beginner:

#### Lesson 1: JavaScript Basics - Misunderstood Language of the Era

### Overview

```
<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    var sp = 10;
    var eb = 20;
     console.log(a+b);
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>
```

```
JavaScript, a rich and expressive language in its own right. 
```
This section covers the basic concepts of JavaScript, as well as some frequent pitfalls
 for people who have not used JavaScript before. While it will be of particular value 
 to people with no programming experience, even people who have used other programming 
 languages may benefit from learning about some of the peculiarities of JavaScript.

 ```
If you're interested in learning more about the JavaScript language, I highly recommend 
JavaScript: The Good Parts by Douglas Crockford.
```

Hello world

To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:

(function(){
  "use strict";
  /* Start of your code */
  function greetMe(yourName) {
    alert('Hello ' + yourName);
  }
  
  greetMe('World');
  /* End of your code */
})();

Remember to always include the (function(){"use strict"; before your code, and add })(); to the end of your code. You will learn what these mean, but for now they can be thought of as doing the following —

1.  Massively improve performance

2.  Prevent stupid semantics in JavaScript that trip up beginners

3.  Prevent code snippets executed in the console from interacting with one-another (e.g. having something created in one console execution being used for a different console execution).

## Syntax Basics

Understanding statements, variable naming, whitespace, and other basic JavaScript syntax.

A simple variable declaration

JavaScript is case-sensitive and uses the Unicode character set

var First is not same as var first.

```
var first = 'hello world';
```
Whitespace has no meaning outside of quotation marks
```
var first =         'hello world';
```


There are three kinds of variable declarations in JavaScript.


var

    Declares a variable, optionally initializing it to a value.
    
    For example, var x = 42. This syntax can be used to declare both local and global variables, depending on the execution context.
    
let

    Declares a block-scoped, local variable, optionally initializing it to a value.
    
    let y = 13. This syntax can be used to declare a block-scope local variable.
    
const

    Declares a block-scoped, read-only named constant.
    
    const PI = 3.14;
    

##### You can also simply assign a value to a variable For example, x = 42. This form creates an undeclared global variable.

 ```
 
var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;
// This one may puzzle you until you read **'Variable hoisting'** below

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;


Recap:

var a;                          // variable
var b = "init";                 // string
var c = "Hi" + " " + "Joe";     // = "Hi Joe"
var d = 1 + 2 + "3";            // = "33"
var e = [2,3,5,8];              // array
var f = false;                  // boolean
var g = /()/;                   // RegEx
var h = function(){};           // function object
const PI = 3.14;                // constant
var a = 1, b = 2, c = a + b;    // one line
let z = 'zzz';                  // block scope local variable


 ```
 
## Types

Values: Every value has a type, which determines the role it plays. There are seven basic types listed below.

Types:

    Numbers - Integers & decimals (e.g. 10, 10.001)
    Strings - characters including spaces. Must be contained within quotes (e.g. "How are you today?")
    Booleans - true or false (keyword)
    Undefined - means "I don't have a value"
    Null - means "I have a value of nothing" — note that this is similar to (but logically distinct from) Undefined
    Objects - see below
    Functions - see below

Recap:
false, true                     // boolean
18, 3.14, 0b10011, 0xF6, NaN    // number
"flower", 'John'                // string
undefined, null , Infinity      // special


EPL (read, eval, print, loop): takes the code you give it and returns a result. A JavaScript REPL can be accessed in the browser's Developer tools. (ex. console tab in FireFox/ Chrome's dev tools). You can access this by rightclicking the web browser ( on the web page ) and click Inspect. This will bring the Console , Debugger along with the other tools

##Expressions 
Parentheses indicate precedence
```
2 * 3 + 5;    // returns 11; multiplication happens first
2 * (3 + 5);  // returns 16; addition happens first

'37' - 7 // 30
'37' + 7 // "377"

Recap:
a * (b + c)         // grouping
person.age          // member
person[age]         // member
!(a == b)           // logical not
a != b              // not equal
typeof a            // type (number, object, function...)
x << 2  x >> 3      // minary shifting
a = b               // assignment
a == b              // equals
a != b              // unequal
a === b             // strict equal
a !== b             // strict unequal
a < b   a > b       // less and greater than
a <= b  a >= b      // less or equal, greater or eq
a += b              // a = a + b (works with - * %...)
a && b              // logical and
a || b              // logical or

& 	AND  	 5 & 1 (0101 & 0001)	1 (1)
| 	OR  	 5 | 1 (0101 | 0001)	5 (101)
~ 	NOT  	 ~ 5 (~0101)	10 (1010)
^ 	XOR  	 5 ^ 1 (0101 ^ 0001)	4 (100)
<< 	left shift  	 5 << 1 (0101 << 1)	10 (1010)
>> 	right shift  	 5 >> 1 (0101 >> 1)	2 (10)
>>> 	zero fill right shift  	 5 >>> 1 (0101 >>> 1)	2 (10)

```
Tabs enhance readability, but have no special meaning
```
var first = function() {
    console.log('hello');
};
```


Comments: Used to leave notes within the code but is not included as part of the 
instructions for the computer to execute.
```
// single line comment

/* Comments that
are longer than a 
single line. */

```

```
var input;
if (input === undefined) {
 console.log("I am undefined");
} else {
  console.log("I Wont get executed");
}

var fish = ['Lion', , 'Angel'];
fish[1] is undefined

```
The undefined value behaves as false when used in a boolean context. 
The undefined value converts to NaN when used in numeric context.
null value behaves as 0 in numeric contexts and as false in boolean contexts.
 
```
var a;
a + 2;  // Evaluates to NaN

var n = null;
console.log(n * 32); // Will log 0 to the console

//RegExp literals

var re = /ab+c/;


var singleLineStatement = "hello"; //needs semi-colon

if (condition === "something"){

    var singleLineStatement = "hello"; //needs semi-colon
    var anotherStatement = "hi"; //needs semi-colon

} //does not need semi-colon

```

####Lesson 1: JavaScript Events:

The Web platform provides several ways to be notified of DOM events. 

Two common approaches are 

1 .addEventListener() and 
2.The specific onevent handlers . The HTMLElement.click() method simulates a mouse click on an element


Registering onevent handlers

The onevent handlers are properties on certain DOM elements to manage how that element reacts to events. Elements can be interactive (links, buttons, images, forms, and so forth) or non-interactive (such as the base <body> element). Events are actions like:

    Being clicked
    Detecting pressed keys
    Getting focus

The on-event handler is usually named with the event it reacts to, like onclick, onkeypress, onfocus, etc.

You can specify an on<…> event handler for a particular event (such as click) for a given object in different ways:

    Adding an HTML attribute named on<eventtype>:
    <button onclick="handleClick()">,
    Or by setting the corresponding property from JavaScript:
    document.querySelector("button").onclick = function(event) { … }.


Best 3 Sources to read: 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers
https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event




Sample:

```

<!DOCTYPE html>
<html>
<body>

<image src="hello.png" onclick="alert('Hi')"</image>

<p>Demonstrating quirks of <code>on<em>event</em></code> HTML attributes on
   <a onclick="log()">these three words</a>.
</p>

<button>Click</button>
<div> Something in this div - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events</div>


<h2>https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick#Examples </h2>
<script>
function log() {
  alert('Hi i am invoked')
}

function log1() {
  alert('Hi i have overridden you')
}


const button = document.querySelector('button');

button.addEventListener('click',log);
button.addEventListener('click', log1);


const mydiv = document.querySelector('div');

mydiv.onclick = log;

mydiv.onclick = log1;
//onmouseover can be replaced for click.

</script>

</body>
</html>
```

### Variable hoisting

Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception. This concept is known as hoisting;

variables in JavaScript are in a sense **"hoisted" or lifted to the top of the function or statement**. 

However, variables that are hoisted return a value of undefined. So even if you declare and initialize after you use or refer to this variable, it still returns undefined


```
console.log(x === undefined); // true
var x = 3;

console.log(y); // ReferenceError
let y = 3;

```

### Function hoisting


```

/* Function declaration */

foo(); // "bar"

function foo() {
  console.log('bar');
}


/* Function expression */

baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};
```


#### Lesson 1.a: Running In web page
### Getting started

```
<!DOCTYPE html>
<html>
<body>

<script>
var first = function() {
    console.log('hello');
	alert('hello');
};

first();

</script> 

</body>
</html>

#### Lesson 1.b: Firebug
### Getting started
Firebug is a free and open-source web browser extension for Mozilla Firefox that facilitates the live debugging, editing, and monitoring of any website's CSS, HTML, DOM, XHR, and JavaScript.

===================================

##### save the below code in somesample.js

var first = function() {
    console.log('hello');
	alert('hello');
};

==================

<!DOCTYPE html>
<html>

<body>

<script src="somesample.js">
</script>

<script>
first();
</script> 
</body>
</html>



```

#### Lesson 2: Operators
### Basic Operators

Basic operators allow you to manipulate values.

## Concatenation

```
var first = 'hello';
var bar = 'world';

console.log(first + ' ' + bar); // 'hello world'
```

## Multiplication and division

```
2 * 3;
2 / 3;
```

##Incrementing and decrementing
```
var i = 1;

var j = ++i;  // pre-increment:  j equals 2; i equals 2
var k = i++;  // post-increment: k equals 2; i equals 3
```
##Operations on Numbers & Strings

In JavaScript, numbers and strings will occasionally behave in ways you might not expect.

##Addition vs. concatenation
```
var first = 1;
var bar = '2';

console.log(first + bar);  // 12. uh oh
```
Forcing a string to act as a number
```
var first = 1;
var bar = '2';

// coerce the string to a number
console.log(first + Number(bar));
```
The Number constructor, when called as a function (like above) will have the effect of 
casting its argument into a number. You could also use the unary plus operator, which does the same thing:

Forcing a string to act as a number (using the unary-plus operator)
```
#console.log(first + +bar);
```
#### String and Math Functions
```
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno");        // last occurance
abc.slice(3, 6);                // cuts out "def", negative values count from behind
abc.replace("abc","123");       // find and replace, takes regular expressions
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters
128.toString(16);               // number to hex(16), octal (8) or binary (2)

var pi = Math.PI;       // 3.141592653589793
Math.round(4.4);        // = 4 - rounded
Math.round(4.5);        // = 5
Math.pow(2,8);          // = 256 - 2 to the power of 8
Math.sqrt(49);          // = 7 - square root 
Math.abs(-3.14);        // = 3.14 - absolute, positive value
Math.ceil(3.14);        // = 4 - rounded up
Math.floor(3.99);       // = 3 - rounded down
Math.sin(0);            // = 0 - sine
Math.cos(Math.PI);      // OTHERS: tan,atan,asin,acos,
Math.min(0, 3, -2, 2);  // = -2 - the lowest value
Math.max(0, 3, -2, 2);  // = 3 - the highest value
Math.log(1);            // = 0 natural logarithm 
Math.exp(1);            // = 2.7182pow(E,x)
Math.random();          // random number between 0 and 1
Math.floor(Math.random() * 5) + 1;  // random integer, from 1 to 5

var pi = 3.141;
pi.toFixed(0);          // returns 3
pi.toFixed(2);          // returns 3.14 - for working with money
pi.toPrecision(2)       // returns 3.1
pi.valueOf();           // returns number
Number(true);           // converts to number
Number(new Date())      // number of milliseconds since 1970
parseInt("3 months");   // returns the first number: 3
parseFloat("3.5 days"); // returns 3.5
Number.MAX_VALUE        // largest possible JS number
Number.MIN_VALUE        // smallest possible JS number
Number.NEGATIVE_INFINITY// -Infinity
Number.POSITIVE_INFINITY// Infinity

eval();                     // executes a string as if it was script code
String(23);                 // return string from number
(23).toString();            // return string from number
Number("23");               // return number from string
decodeURI(enc);             // decode URI. Result: "my page.asp"
encodeURI(uri);             // encode URI. Result: "my%page.asp"
decodeURIComponent(enc);    // decode a URI component
encodeURIComponent(uri);    // encode a URI component
isFinite();                 // is variable a finite, legal number
isNaN();                    // is variable an illegal number
parseFloat();               // returns floating point number of string
parseInt();                 // parses a string and returns an integer


```

####Lesson 3: Operators Cont..

##Logical Operators

Logical operators allow you to evaluate a series of operands using AND and OR operations.

Logical AND and OR operators
```
var first = 1;
var bar = 0;
var baz = 2;

first || bar;   // returns 1, which is true
bar || first;   // returns 1, which is true

first && bar;   // returns 0, which is false
first && baz;   // returns 2, which is true
baz && first;   // returns 1, which is true
```
Though it may not be clear from the example, the || operator returns the value of the 
first truthy operand, or, in cases where neither operand is truthy, it'll return the 
last of both operands. The && operator returns the value of the first false operand, 
or the value of the last operand if both operands are truthy.

Be sure to consult the section called Truthy and Falsy Things for more details on which
 values evaluate to true and which evaluate to false.
Note

You'll sometimes see developers use these logical operators for flow control instead of 
using if statements. For example:
```
// do something with first if first is truthy
first && doSomething(first);

// set bar to baz if baz is truthy;
// otherwise, set it to the return
// value of createBar()
var bar = baz || createBar();
```
This style is quite elegant and pleasantly terse; that said, it can be really hard to read,
 especially for beginners. I bring it up here so you'll recognize it in code you read, but 
 I don't recommend using it until you're extremely comfortable with what it means and how 
 you can expect it to behave.
##Comparison Operators

Comparison operators allow you to test whether values are equivalent or whether values are identical.





####Lesson 4: Operators Cont..

##Comparison operators
```
var first = 1;
var bar = 0;
var baz = '1';
var bim = 2;

first == bar;   // returns false
first != bar;   // returns true
first == baz;   // returns true; careful!

first === baz;             // returns false
first !== baz;             // returns true
first === parseInt(baz);   // returns true

first > bim;    // returns false
bim > baz;    // returns true
first <= baz;   // returns true
```





####Lesson 5: Conditional Code

##Conditional Code

Sometimes you only want to run a block of code under certain conditions. Flow control ” via if 
and else blocks ” lets you run code only under certain conditions.

##Flow control
```
var first = true;
var bar = false;

if (bar) {
    // this code will never run
    console.log('hello!');
}

if (bar) {
    // this code won't run
} else {
    if (first) {
        // this code will run
    } else {
        // this code would run if first and bar were both false
    }
}
```
Note

While curly braces aren't strictly required around single-line if statements, using them 
consistently, even when they aren't strictly required, makes for vastly more readable code.

Be mindful not to define functions with the same name multiple times within separate if/else 
blocks, as doing so may not have the expected result.
Truthy and Falsy Things

In order to use flow control successfully, it's important to understand which kinds of values 
are "truthy" and which kinds of values are "falsy." Sometimes, values that seem like they should 
evaluate one way actually evaluate another.

Values that evaluate to true
```
'0';
'any string';
[];  // an empty array
{};  // an empty object
1;   // any non-zero number
```
Values that evaluate to false
```
0;
'';  // an empty string
NaN; // JavaScript's "not-a-number" variable
null;
undefined;  // be careful -- undefined can be redefined!
```
#Conditional Variable Assignment with The Ternary Operator

Sometimes you want to set a variable to a value depending on some condition. You could use 
an if/else statement, but in many cases the ternary operator is more convenient. 

[Definition: The ternary operator tests a condition; 
if the condition is true, it returns a certain value, otherwise it returns a different value.]

##The ternary operator
```
// set first to 1 if bar is true;
// otherwise, set first to 0
var first = bar ? 1 : 0;
```
While the ternary operator can be used without assigning the return value to a variable, this is generally discouraged.
#Switch Statements

Rather than using a series of if/else if/else blocks, sometimes it can be useful to use a switch statement instead. 
[Definition: Switch statements look at the value of a variable or expression, and run different blocks of code depending on the value.]

A switch statement
```
switch (first) {

    case 'bar':
        alert('the value was bar -- yay!');
    break;

    case 'baz':
        alert('boo baz :(');
    break;

    default:
        alert('everything else is just ok');
    break;

}

```
Switch statements have somewhat fallen out of favor in JavaScript, because often the same behavior
 can be accomplished by creating an object that has more potential for reuse, testing, etc. For example:
```
var stuffToDo = {
    'bar' : function() {
        alert('the value was bar -- yay!');
    },

    'baz' : function() {
        alert('boo baz :(');
    },

    'default' : function() {
        alert('everything else is just ok');
    }
};

if (stuffToDo[first]) {
    stuffToDo[first]();
} else {
    stuffToDo['default']();
}

```




####Lesson 6: Loops

We'll look at objects in greater depth later in this chapter.
Loops

Loops let you run a block of code a certain number of times.

##Loops
```
// logs 'try 0', 'try 1', ..., 'try 4'
for (var i=0; i<5; i++) {
    console.log('try ' + i);
}
```
Note that in Loops even though we use the keyword var before the variable name i, this does not
 "scope" the variable i to the loop block. We'll discuss scope in depth later in this chapter.
The for loop

A for loop is made up of four statements and has the following structure:
```
for ([initialisation]; [conditional]; [iteration])
 [loopBody]
```
The initialisation statement is executed only once, before the loop starts. It gives you an 
opportunity to prepare or declare any variables.

The conditional statement is executed before each iteration, and its return value decides 
whether or not the loop is to continue. If the conditional statement evaluates to a falsey 
value then the loop stops.

The iteration statement is executed at the end of each iteration and gives you an opportunity 
to change the state of important variables. Typically, this will involve incrementing or 
decrementing a counter and thus bringing the loop ever closer to its end.

The loopBody statement is what runs on every iteration. It can contain anything you want. 
You'll typically have multiple statements that need to be executed and so will wrap them in a block ( {...}).

Here's a typical for loop:

A typical for loop
```
for (var i = 0, limit = 100; i < limit; i++) {
    // This block will be executed 100 times
    console.log('Currently at ' + i);
    // Note: the last log will be "Currently at 99"
}
```



    * for (let i = 0; i < arr.length; ++i)
    * arr.forEach((v, i) => { /* ... */ })
    * for (let i in arr)
    * for (const v of arr)


#The while loop

A while loop is similar to an if statement, except that its body will keep executing until 
the condition evaluates to false.
```
while ([conditional]) [loopBody]
```
Here's a typical while loop:

A typical while loop
```
var i = 0;
while (i < 100) {

    // This block will be executed 100 times
    console.log('Currently at ' + i);

    i++; // increment i

}
```
You'll notice that we're having to increment the counter within the loop's body. It is possible 
to combine the conditional and incrementer, like so:

A while loop with a combined conditional and incrementer
```
var i = -1;
while (++i < 100) {
    // This block will be executed 100 times
    console.log('Currently at ' + i);
}
```
Notice that we're starting at -1 and using the prefix incrementer (++i).
The do-while loop

This is almost exactly the same as the while loop, except for the fact that the loop's body is 
executed at least once before the condition is tested.

do [loopBody] while ([conditional])

Here's a do-while loop:

A do-while loop
```
do {

    // Even though the condition evaluates to false
    // this loop's body will still execute once.

    alert('Hi there!');

} while (false);
```
These types of loops are quite rare since only few situations require a loop that blindly 
executes at least once. Regardless, it's good to be aware of it.

```

const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
```


####Lesson 7: Breaking and continuing

Breaking and continuing

Usually, a loop's termination will result from the conditional statement not evaluating to 
true, but it is possible to stop a loop in its tracks from within the loop's body with the break statement.

Stopping a loop

for (var i = 0; i < 10; i++) {
    if (something) {
        break;
    }
}

You may also want to continue the loop without executing more of the loop's body. This 
is done using the continue statement.

Skipping to the next iteration of a loop

for (var i = 0; i < 10; i++) {

    if (something) {
        continue;
    }

    // The following statement will only be executed
    // if the conditional 'something' has not been met
    console.log('I have been reached');

}






####Lesson 8: Reserved Words

Reserved Words

JavaScript has a number of reserved words, or words that have special meaning in the language. 
You should avoid using these words in your code except when using them with their intended meaning.

    abstract
    boolean
    break
    byte
    case
    catch
    char
    class
    const
    continue
    debugger
    default
    delete
    do
    double
    else
    enum
    export
    extends
    final
    finally
    float
    for
    function
    goto
    if
    implements
    import
    in
    instanceof
    int
    interface
    long
    native
    new
    package
    private
    protected
    public
    return
    short
    static
    super
    switch
    synchronized
    this
    throw
    throws
    transient
    try
    typeof
    var
    void
    volatile
    while
    with


	
	
	
	
####Lesson 9: Arrays

JavaScript Arrays are not real arrays

Arrays are zero-indexed lists of values. They are a handy way to store a set of related items 
of the same type (such as strings), though in reality, an array can include multiple types of 
items, including other arrays.

Arrays are also objects which have some special methods inherited from Array.prototype global object

A simple array

var myArray = [ 'hello', 'world' ];

Accessing array items by index

var myArray = [ 'hello', 'world', 'first', 'bar' ];
console.log(myArray[3]);   // logs 'bar'

Testing the size of an array

var myArray = [ 'hello', 'world' ];
console.log(myArray.length);   // logs 2

Changing the value of an array item

var myArray = [ 'hello', 'world' ];
myArray[1] = 'changed';

While it's possible to change the value of an array item as shown in Changing the value of 
an array item, it's generally not advised.

Adding elements to an array

var myArray = [ 'hello', 'world' ];
myArray.push('new');

Working with arrays

var myArray = [ 'h', 'e', 'l', 'l', 'o' ];
var myString = myArray.join('');   // 'hello'
var mySplit = myString.split('');  // [ 'h', 'e', 'l', 'l', 'o' ]



var dogs = ["Bulldog", "Beagle", "Labrador"]; 
var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

alert(dogs[1]);             // access value at index, first item being [0]
dogs[0] = "Bull Terier";    // change the first item

for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
    console.log(dogs[i]);
}

dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
dogs.pop();                             // remove last element
dogs.push("Chihuahua");                 // add new element to the end
dogs[dogs.length] = "Chihuahua";        // the same as push
dogs.shift();                           // remove first element
dogs.unshift("Chihuahua");              // add new element to the beginning
delete dogs[0];                         // change element to undefined (not recommended)
dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
dogs.slice(1,4);                        // elements from [1] to [4-1]
dogs.sort();                            // sort string alphabetically
dogs.reverse();                         // sort string in descending order
x.sort(function(a, b){return a - b});   // numeric sort
x.sort(function(a, b){return b - a});   // numeric descending sort
highest = x[0];                         // first item in sorted array is the lowest (or highest) value
x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort



####Lesson 10: Objects

Objects contain one or more key-value pairs. The key portion can be any string. The value portion 
can be any type of value: a number, a string, an array, a function, or even another object.

[Definition: When one of these values is a function, it's called a method of the object.] 
Otherwise, they are called properties.

As it turns out, nearly everything in JavaScript is an object ” arrays, functions, numbers, 
even strings ” and they all have properties and methods.

###Creating an object Just like variables, an object needs to be defined first before it can be used.

Defining an empty object

var myObject = new Object();
var myObject = {};

Both lines are the same, {} is shorthand for new Object()

Creating an "object literal"

var myObject = {
    sayHello : function() {
        console.log('hello');
    },

    myName : 'Messi'
};

myObject.sayHello();            // logs 'hello'
console.log(myObject.myName);   // logs 'Messi'


var external_date = new Date();
alert("The External File says: " + external_date)

Note

When creating object literals, you should note that the key portion of each key-value pair 
can be written as any valid JavaScript identifier, a string (wrapped in quotes) or a number:

var myObject = {
    validIdentifier: 123,
    'some string': 456,
    99999: 789
};

Object literals can be extremely useful for code organization; for more information, read 
Using Objects to Organize Your Code by Messi Murphey.

####Lesson 10-a: Adding properties & methods to an object

There are many ways (of course) to add new properties and methods to an object after it's been created:

//defining object with 2 properties
var myDinner = {
    appetizer: "salad",
    main: "chicken"
};

Adding Properties with Dot Notation
Syntax: objectName.propertyName

myDinner.side = "rice";
myDinner.dessert = "ice cream";
myDinner.dinnerTime = function(){
    //start eating
}

Adding Properties with Square Bracket Notation
Syntax: objectName["propertyName"]

myDinner["side"] = "rice";
myDinner["dessert"] = "ice cream";
myDinner["dinnerTime"] = function(){
    //start eating
}

###Retrieve an item from an object

You can retrieve properties from an object using the same syntax as adding a property.

myDinner.side; // will return "rice"
myDinner["dessert"]; // will return "ice cream"

###Executing a Method A method is a function, except that it's associated to an object. Calling the method uses the same syntax as calling a function but use dot notation to attach it to a specific object.

myDinner.dinnerTime(); // will run the dinnerTime function



####Lesson 11: Functions

Functions contain blocks of code that need to be executed repeatedly. Functions can take zero 
or more arguments, and can optionally return a value.

Functions can be created in a variety of ways:

Function Declaration

function first() { /* do something */ }

Named Function Expression

var first = function() { /* do something */ }

I prefer the named function expression method of setting a function's name, for some rather 
in-depth and technical reasons. You are likely to see both methods used in others' JavaScript code.
Using Functions

A simple function

var greet = function(person, greeting) {
    var text = greeting + ', ' + person;
    console.log(text);
};


greet('Messi', 'Hello');

A function that returns a value

var greet = function(person, greeting) {
    var text = greeting + ', ' + person;
    return text;
};

console.log(greet('Messi','hello'));

A function that returns another function

var greet = function(person, greeting) {
    var text = greeting + ', ' + person;
    return function() { console.log(text); };
};


var greeting = greet('Messi', 'Hello');
greeting();

###Functions and semicolons

Function declarations are contained in a block denoted by the {} so it does not require a semicolon.

function foo() {
	//do stuff here
}

Function expressions require a semicolon because the function is assigned to the variable which makes it a statement. Statements require a semicolon.

var foo = function() {
	//do stuff here
};



####Lesson 12: Self-Executing Anonymous Functions

A common pattern in JavaScript is the self-executing anonymous function. This pattern creates a 
function expression and then immediately executes the function. This pattern is extremely useful 
for cases where you want to avoid polluting the global namespace with your code — no variables 
declared inside of the function are visible outside of it.

A self-executing anonymous function

(function(){
    var first = 'Hello world';
})();


console.log(first);   // undefined!

Functions as Arguments

In JavaScript, functions are "first-class citizens" &mdash they can be assigned to variables or 
passed to other functions as arguments. Passing functions as arguments is an extremely common idiom in jQuery.

Passing an anonymous function as an argument

var myFn = function(fn) {
    var result = fn();
    console.log(result);
};

myFn(function() { return 'hello world'; });   // logs 'hello world'

Passing a named function as an argument

var myFn = function(fn) {
    var result = fn();
    console.log(result);
};

var myOtherFn = function() {
    return 'hello world';
};

myFn(myOtherFn);   // logs 'hello world'





####Lesson 13: Testing Type

JavaScript offers a way to test the "type" of a variable. However, the result can be confusing — 
for example, the type of an Array is "object".

It's common practice to use the typeof operator when trying to determining the type of a specific value.

Testing the type of various variables

var myFunction = function() {
    console.log('hello');
};

var myObject = {
    first : 'bar'
};

var myArray = [ 'a', 'b', 'c' ];

var myString = 'hello';

var myNumber = 3;

typeof myFunction;   // returns 'function'
typeof myObject;     // returns 'object'
typeof myArray;      // returns 'object' -- careful!
typeof myString;     // returns 'string';
typeof myNumber;     // returns 'number'

typeof null;         // returns 'object' -- careful!


if (myArray.push && myArray.slice && myArray.join) {
    // probably an array
    // (this is called "duck typing")
}

if (Object.prototype.toString.call(myArray) === '[object Array]') {
    // Definitely an array!
    // This is widely considered as the most robust way
    // to determine if a specific value is an Array.
}





####Lesson 14: The this keyword

In JavaScript, as in most object-oriented programming languages, this is a special keyword that 
is used within methods to refer to the object on which a method is being invoked. The value of 
this is determined using a simple series of steps:

    If the function is invoked using Function.call or Function.apply, this will be set to the 
	first argument passed to call/apply. If the first argument passed to call/apply is null or 
	undefined, this will refer to the global object (which is the window object in Web browsers).
    If the function being invoked was created using Function.bind, this will be the first argument
	that was passed to bind at the time the function was created.
    If the function is being invoked as a method of an object, this will refer to that object.
    Otherwise, the function is being invoked as a standalone function not attached to any object, 
	and this will refer to the global object.

A function invoked using Function.call

var myObject = {
    sayHello : function() {
        console.log('Hi! My name is ' + this.myName);
    },

    myName : 'Messi'
};

var secondObject = {
    myName : 'Ronoldo'
};

myObject.sayHello();                  // logs 'Hi! My name is Messi'
myObject.sayHello.call(secondObject); // logs 'Hi! My name is Ronoldo'

A function created using Function.bind

var myName = 'the global object',

    sayHello = function () {
        console.log('Hi! My name is ' + this.myName);
    },

    myObject = {
        myName : 'Messi'
    };

var myObjectHello = sayHello.bind(myObject);

sayHello();       // logs 'Hi! My name is the global object'
myObjectHello();  // logs 'Hi! My name is Messi'

A function being attached to an object at runtime

var myName = 'the global object',

    sayHello = function() {
        console.log('Hi! My name is ' + this.myName);
    },

    myObject = {
        myName : 'Messi'
    },

    secondObject = {
        myName : 'Ronoldo'
    };

myObject.sayHello = sayHello;
secondObject.sayHello = sayHello;

sayHello();               // logs 'Hi! My name is the global object'
myObject.sayHello();      // logs 'Hi! My name is Messi'
secondObject.sayHello();  // logs 'Hi! My name is Ronoldo'

Note

When invoking a function deep within a long namespace, it is often tempting to reduce the 
amount of code you need to type by storing a reference to the actual function as a single, 
shorter variable. It is important not to do this with instance methods as this will cause 
the value of this within the function to change, leading to incorrect code operation. 
For instance:

var myNamespace = {
    myObject : {
        sayHello : function() {
            console.log('Hi! My name is ' + this.myName);
        },

        myName : 'Messi'
    }
};

var hello = myNamespace.myObject.sayHello;

hello();  // logs 'Hi! My name is undefined'

You can, however, safely reduce everything up to the object on which the method is invoked:

var myNamespace = {
    myObject : {
        sayHello : function() {
            console.log('Hi! My name is ' + this.myName);
        },

        myName : 'Messi'
    }
};

var obj = myNamespace.myObject;

obj.sayHello();  // logs 'Hi! My name is Messi'





####Lesson 15: Scope

"Scope" refers to the variables that are available to a piece of code at a given time. A lack of
 understanding of scope can lead to frustrating debugging experiences.

When a variable is declared inside of a function using the var keyword, it is only available to 
code inside of that function — code outside of that function cannot access the variable. On the 
other hand, functions defined inside that function will have access to to the declared variable.

Furthermore, variables that are declared inside a function without the var keyword are not local
 to the function — JavaScript will traverse the scope chain all the way up to the window scope 
 to find where the variable was previously defined. If the variable wasn't previously defined, 
 it will be defined in the global scope, which can have extremely unexpected consequences;

Functions have access to variables defined in the same scope

var first = 'hello';

var sayHello = function() {
    console.log(first);
};

sayHello();         // logs 'hello'
console.log(first);   // also logs 'hello'

Code outside the scope in which a variable was defined does not have access to the variable

var sayHello = function() {
    var first = 'hello';
    console.log(first);
};

sayHello();         // logs 'hello'
console.log(first);   // doesn't log anything

Variables with the same name can exist in different scopes with different values

var first = 'world';

var sayHello = function() {
    var first = 'hello';
    console.log(first);
};

sayHello();         // logs 'hello'
console.log(first);   // logs 'world'

Functions can "see" changes in variable values after the function is defined

var myFunction = function() {
    var first = 'hello';

    var myFn = function() {
        console.log(first);
    };

    first = 'world';

    return myFn;
};

var f = myFunction();
f();  // logs 'world' -- uh oh

Scope insanity

// a self-executing anonymous function
(function() {
    var baz = 1;
    var bim = function() { alert(baz); };
    bar = function() { alert(baz); };
})();

console.log(baz);  // baz is not defined outside of the function

bar();  // bar is defined outside of the anonymous function
        // because it wasn't declared with var; furthermore,
        // because it was defined in the same scope as baz,
        // it has access to baz even though other code
        // outside of the function does not

bim();  // bim is not defined outside of the anonymous function,
        // so this will result in an error

		
		
		
####Lesson 16: Closures

Closures are an extension of the concept of scope ” functions have access to variables that were
 available in the scope where the function was created. If that's confusing, don't worry: closures
 are generally best understood by example.

In Functions can "see" changes in variable values after the function is defined, we saw how 
functions have access to changing variable values. The same sort of behavior exists with 
functions defined within loops — the function "sees" the change in the variable's value 
even after the function is defined, resulting in all clicks alerting 5.

How to lock in the value of i?

/* this won't behave as we want it to; */
/* every click will alert 5 */
for (var i=0; i<5; i++) {
    $('<p>click me</p>').appendTo('body').click(function() {
        alert(i);
    });
}

Locking in the value of i with a closure

/* fix: close the value of i inside createFunction, so it won't change */
var createFunction = function(i) {
    return function() { alert(i); };
};

for (var i=0; i<5; i++) {
    $('<p>click me</p>').appendTo('body').click(createFunction(i));
}

Closures can also be used to resolve issues with the this keyword, which is unique to each scope:

Using a closure to access inner and outer object instances simultaneously

var outerObj = {
    myName : 'outer',
    outerFunction : function () {

        // provide a reference to outerObj through innerFunction's closure
        var self = this;

        var innerObj = {
            myName : 'inner',
            innerFunction : function () {
                console.log(self.myName, this.myName); // logs 'outer inner'
            }
        };

        innerObj.innerFunction();

        console.log(this.myName); // logs 'outer'
    }
};

outerObj.outerFunction();

This mechanism can be particularly useful when dealing with callbacks, though in those cases, 
it is often better to use Function.bind, which will avoid any overhead associated with scope traversal.


####Lesson 17: ASI automatic semicolon insertion

First of all you should know which statements are affected by the automatic semicolon insertion 
(also known as ASI for brevity):

    empty statement
    var statement
    expression statement
    do-while statement
    continue statement
    break statement
    return statement
    throw statement

The concrete rules of ASI, are described in the specification:

    §7.9.1 Rules of Automatic Semicolon Insertion

	
Case 1

a = b
++c
// is transformed to:
a = b;
++c;


Case 2

return 
  "something";
// is transformed to
return;
  "something";
  
  
   function retrunMisbehaves() {
        return                  // 1
        {                       // 2
            key: 1
        };
    }
    console.log(typeof retrunMisbehaves()); // 3
	
	
	 function retrunMisbehaves() {
        return{                       // 2
            key: 1
        };
    }
    console.log(typeof retrunMisbehaves()); // 3
	
	
	
	
####Lesson 18: The side effects of missing var keyword
	
Q: What is the output?

    (function() {                       // 1
        var myVar = myVarCopy = 42;     // 2
    })();

    console.log(myVar);                 // 3
    console.log(myVarCopy);             // 4

A:

    Uncaught ReferenceError: myVar is not defined
    42

	Why only myVar is thrown error
	
	Unlike myVar, the myVarCopy is directly assigned 42 at #2 without explicitly declaring it
	with var keyword and the gotcha here is the JavaScript engine doesn't complain and creates 
	the myVarCopy variable in the global scope - in this case, the window object scope.
	
	(function (){
        "use strict";                   // 5
        var myVar = myVarCopy = 42;     // Uncaught ReferenceError: myVarCopy is not defined(…)
    })();

    console.log(myVar);                 
    console.log(myVarCopy);    
	
####Lesson 19: JSON - JavaScript Object Notation
	
	JSON is a subset of the object literal notation of JavaScript. Since JSON is a subset of JavaScript,
	it can be used in the language with no muss or fuss.
	
	JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is based
	upon JavaScript syntax but is distinct from it: some JavaScript is not JSON, and some JSON is not JavaScript
	
	 "firstName":"John" ==> Key/value pairs
	 
	 JSON Objects

	JSON objects are written inside curly braces.
	
	{"firstName":"Lionel", "lastName":"Messi"} 

	
####Lesson 20: Style Guide

1. Use const for all of your references; avoid using var



    Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to
	comprehend code.

// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;

2.If you must reassign references, use let instead of var


Why? let is block-scoped rather than function-scoped like var.

Also, variables declared with let are not visible before they are declared in their enclosing block.

// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}

3.Use object method shorthand/ property value

// bad
const atom = {
  value: 1,
  lukeSkywalker: lukeSkywalker,
  
  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,
  lukeSkywalker,
  
  addValue(value) {
    return atom.value + value;
  },
};

4.Only quote properties that are invalid identifiers

// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};

5.Use Array#push instead of direct assignment to add items to an array

const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');


6. Use single quotes '' for strings.Strings that cause the line to go over 100 characters should
 be written across multiple lines using string concatenation.

// bad
const name = "Capt. Janeway";

// good
const name = 'Capt. Janeway';


JS Bin saving - a quick explanation
JS Bin is a webapp specifically designed to help JavaScript and CSS folk test snippets of code,
 within some context, and debug the code collaboratively.

JS Bin allows you to edit and test JavaScript and HTML (reloading the URL also maintains the 
state of your code - new tabs doesn't). Once you're happy you can save, and send the URL to 
a peer for review or help. They can then make further changes saving anew if required.


https://www.youtube.com/watch?v=PBkzW9mNGrQ&list=PLXmT1r4krsTooRDWOrIu23P3SEZ3luIUq&index=6




