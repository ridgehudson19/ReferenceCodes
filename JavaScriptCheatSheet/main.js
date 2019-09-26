/* --- console --- 
  //alert('hello world');
  console.log('hello world');
  console.error('This is an error');
  console.warn('This is a warning');

//You can run JS code from the console (chrome F12)
//MDN console codes (DEBUGGING) - https://developer.mozilla.org/en-US/docs/Web/API/console
*/

/* --- variables ---
	var, let, const
	
	var = globally scoped (used since beginning of js)
	let = locally scoped (added in ECMAScript2015(ES6))
	const = added with ES6 - errors when value is reassigned

	strings, numbers, boolean, null, undefined 
	
*/
/*using let
	let age = 30;
	console.log(age);
	age = 31;
	console.log(age);
	//no error
*/
/*using const
	const age = 30;
	console.log(age);
	age = 31;
	console.log(age);
	//error 
*/
/*using strings, numbers, boolean, null, undefined 
	const name = 'John';
	const age = 30;
	const rating = 4.5;
	const isCool = true;
	const x = null;
	const y = undefined;
	let z;
	
	console.log(typeof name); //returns 'string'
	console.log(typeof age); //returns 'number'
	console.log(typeof rating); //returns 'number', no decimal variable type
	console.log(typeof isCool); //returns 'boolean'
	console.log(typeof x); //returns 'object'
	console.log(typeof y); //returns 'undefined'
	console.log(typeof z); //returns 'undefined'
	
	//concatenation (next 3 examples output the same thing)
	//console.log('my name is ' + name + ' and I am ' + age);
	
	//template string (or literal)
	console.log(`my name is ${name} and I am ${age}`);
	
	const hello = `my name is ${name} and I am ${age}`;
	console.log(hello);


	
	//string properties & methods (methods have (), properties do not)
	const s = 'Hello World!';
	console.log(s.length);
	console.log(s.toUpperCase());
	console.log(s.toLowerCase());
	console.log(s.substring(0, 5));
	console.log(s.substring(0, 5).toUpperCase()); //chaining properties and methods
	
	//split turns a variable into an array by choosing the delimiter
	console.log(s.split('')); 
	const t = 'technology, computers, it, code'; 
	console.log(t.split(', '));
*/

/* ---Arrays ---

	const numbers = new Array(1,2,3,4,5);
	console.log(numbers);
	
	//arrays allow multiple data types and do not require setting its length
	//in the definition
	//const fruits = ['apples', 'oranges', 'pears', 10, true];
	const fruits = ['apples', 'oranges', 'pears'];
	
	//adding to an array
	fruits[3] = 'grapes'; //adds grapes if fruits[3] doesnt exist
	fruits.push('mangos'); //adds to end of list
	fruits.unshift('strawberries'); //adds to beginning of list
	fruits.pop(); // removes last one
	console.log(fruits);
	
	console.log(Array.isArray(fruits)); // returns true if arguement is an array
	console.log(Array.isArray('hello')); // returns false
	
	console.log(fruits[0]);
	console.log(fruits[1]); 
	
	console.log(fruits.indexOf('oranges'));
*/

/* --- Object literals ---

	const person = {
		firstName: 'John',
		lastName: 'Doe',
		age: 30,
		hobbies: ['music', 'movies', 'sports'],
		address: {
			street: '50 main street',
			city: 'Boston',
			state: 'MA'
		}
	}
	
	console.log(person); //log entire object
	console.log(person.firstName, person.lastName); //multiple logs at once, seperated by commas
	console.log(person.address.city); //returns 'Boston' 
	
	//destructuring
	const { firstName, lastName, address: {city}} = person; 
	console.log(firstName);
	console.log(city);
	
	person.email = 'john@gmail.com';
	console.log(person); //an email has been added
*/

/* --- Convert JS Object Literal to JSON ---
	
	const todos = [
		{
			id:1,
			text: 'Take out trash',
			isCompleted: true
		},
		{
			id:2,
			text: 'Meeting with boss',
			isCompleted: true
		},
		{
			id:3,
			text: 'Dentist appt',
			isCompleted: false
		}
	];
	
	console.log(todos); //log entire object
	console.log(todos[1].text); //log the 'Meeting with boss' text
	
	//send data to a server with JSON string
	const todoJSON = JSON.stringify(todos);
	console.log(todoJSON);
*/

/* --- Loops --- 
*/
/*For Loop
for (let i = 0; i <= 10; i++){
		console.log(i);
		console.log(`For Loop Number: ${i}`);
}*/
/*While Loop
let i = 0;
while(i<10){
	console.log(`While Loop Number: ${i}`);
	i++;
}*/
/*Array For Loop
const todoNew = [
	{
		id:1,
		text: 'Take out trash',
		isCompleted: true
	},
	{
		id:2,
		text: 'Meeting with boss',
		isCompleted: true
	},
	{
		id:3,
		text: 'Dentist appt',
		isCompleted: false
	}
]; 
 
for(let i = 0; i < todoNew.length; i++){ 
	console.log(todoNew[i].text);
}*/
/*For Of Loop
for(let todo of todoNew){
		console.log(todo);
		console.log(todo.text);
		console.log(todo.id);
}*/
/*For Each Loop
todoNew.forEach(function(todo){
	console.log(todo.text);
});
*/

/* --- Map and Filter ---
*/
/*Map
const todoText = todoNew.map(function(todo){
	return todo.text;
});

console.log(todoText);
*/
/*Filter 
const todoCompleted = todoNew.filter(function(todo){
	return todo.isCompleted === true;	// === is a strict comparison operator
});										// it means it a == b in value and data type

console.log(todoCompleted);
*/
/*Filter and Map

const todoCompleted = todoNew.filter(function(todo){
	return todo.isCompleted === true; //if object var isCompleted is true
}).map(function(todo){
	return todo.text;	//returns the text of objects
})

console.log(todoCompleted);	
*/ 

/* --- Conditionals ---
*/
/*if statements
const x = '10';	

// ==, if, else if, else
if(x == 10){					 
	console.log('x is 10');		 
}
else if (x < 10){
	console.log('x is less than 10');
}
else{
	console.log('x is greater than 10');
}

//triple equal
if(x === 10){					// === checks for value and data type
	console.log('x is 10');		// so this will not return 'x is 10'
} 
else{
	console.log('not a number');
}

const y = 4;

//or condition
if (x < 5 || y > 1){
	console.log('x is less than 5 or y is greater than 1');
}

//nested if condition
if(x == 10){
	if(y==4){
		console.log('nested if');
	}
}
*/
/*ternary operator (shorthand if statement)
const color = x > 10 ? 'red' : 'blue';

console.log(color); //returns red if true, blue if false
*/
/*switch statement
switch(color){
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log('color is not red or blue');
		break;
}
*/

/* --- Functions ---
*/
/*Basic function with parameters
function addNums(num1, num2){
	console.log(num1 + num2);
}

addNums(5,4); //returns 9
addNums();	//returns NaN - Not a Number
*/
/* default parameter values
function addNum(num1=1,num2=1){
	console.log(num1 + num2);
}

addNum(); // returns 2 instead of NaN because the parameters have default values
		  
addNum(5,5); // returns 10 because it overwrites default values
			 
*/
/*using return
function addNumReturn(num1,num2){
	return num1 + num2;
}

console.log(addNumReturn(5,15));
*/

/* --- Arrow Functions --- 
*/ 
/*using return
const addNums = (num1 = 1, num2 = 1) => {	//must use fat arrow => and not ->
	return num1 + num2;
}

console.log(addNums(5,5));
*/
/*not using return
const addNums = (num1 = 1, num2 = 1) => {	
	console.log(num1 + num2);
}

addNums(5,5);	//the function has no return value and should be called
*/
/*using one expression shorthand
//one expression does not require curly braces {}

const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
   		
addNums(5,5);
*/
/*return one expression shorthand
const addNums = (num1 = 1, num2 = 1) => num1 + num2; 
const addNums2 = (num1 = 1, num2 = 1) => { return num1 + num2 }; //also works but longer

console.log(addNums(5,5));
console.log(addNums2(5,5));
*/
/*return one expression shorthand
const addNums = num1 => num1 + 5; 

console.log(addNums(5));

//todos.forEach((todo) => console.log(todo));	//*** Test this after tutorial
												 
*/

/* --- Object Oriented Programming in ES5 (pre-classes) ---
*/
/*constructor function
function Person(firstName, lastName, dob){
	//properties
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	
	//methods
	//With this method, the object will always contain these functions
	
	this.getBirthYear = function(){
		return this.dob.getFullYear();
	}
	
	this.getFullName = function(){
		return `${this.firstName} ${this.lastName}`; //using a template literal
	}
	
}

*/
/*Prototypes 
//With this method, the object will list the functions in the prototype section
Person.prototype.getBirthYear = function(){
		return this.dob.getFullYear();
	}
	
Person.prototype.getFullName = function(){
		return `${this.firstName} ${this.lastName}`; //using a template literal
	}
*/
/*define objects
const person1 = new Person('John', 'Doe', '5-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
*/
/*print objects
console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person2.getFullName());
*/

/* Object Oriented Programming in ES6 (ES5 under the hood of ES6)
*/ 
/*constructor function
class Person{
	constructor(firstName, lastName, dob){
		//properties
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}
	
	//methods - added as prototypes instead of inside the object
	getBirthYear(){
		return this.dob.getFullYear();
	}
	getFullName(){
		return `${this.firstName} ${this.lastName}`;
	}
}
*/
/*define objects
const person1 = new Person('John', 'Doe', '5-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
*/
/*print objects
console.log(person2.getFullName());
console.log(person1);
*/

/* The DOM - Document Object Model (user interface)
console.log(window); //the >document tag is the DOM
*/
/*selecting from the DOM

//single element 
console.log(document.getElementById('my-form'));

const form = document.getElementById('my-form');
console.log(form); //another way to do console.log(document.getElementById())

console.log(document.querySelector('.container'));  
console.log(document.querySelector('h1')); //grabs first element

//multiple elements
console.log(document.querySelectorAll('.item'));	//gives us a NodeList, can use array functions and ForEach

//older multiple element selectors
console.log(document.getElementsByClassName('item')); //do not need .item because its a class selector	
													  //gives us an HTML collection, must be converted to array
													  //to use array functions. not recommended. use querySelectorAll

console.log(document.getElementsByTagName('li'));	  //gives HTML collection
*/
/*using a For Loop DOM
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
*/
/* Manipulating the DOM


//manipulating a list
const ul = document.querySelector('.items');
//ul.remove();	//removes the <ul> tag selected
ul.lastElementChild.remove();	//removes last <li> in <ul> list
ul.firstElementChild.textContent = 'Hello'; //changes the content of the element

//change text
ul.children[1].innerText = 'Brad'; //changes text to be 'Brad' in 2nd element

//change HTML
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; //add HTML to element

//change CSS
const btn = document.querySelector('.btn');
btn.style.background = 'red'; 

//event listeners
btn.addEventListener('click', (e) => { 				//arrow function
	e.preventDefault();	//prevents form from submitting
	console.log('click');
	console.log(e);	//console logs event object
	console.log(e.target); //returns HTML <input> tag from button
	console.log(e.target.className); //returns class attribute of btn
});

//events - click, mouseover, mouseout (events in MDN documentation)
//there are also input events
btn.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('#my-form').style.background = '#ccc';
	document.querySelector('body').classList.add('bg-dark');
	document.querySelector('.items')
	.lastElementChild.innerHTML = '<h1>Hello</h1>';
});
*/

/*Errors and adding to list on success

*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
 
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
	e.preventDefault();
	
	if(nameInput.value === '' || emailInput.value === ''){
		msg.innerHTML = 'Please enter all fields';
		msg.classList.add('error');  
		setTimeout(() => msg.remove(), 3000);		//removes error message after 3 seconds
	}
	else{ 
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${nameInput.value} : 
			${emailInput.value}`));
		
		userList.appendChild(li);
		//clear fields
		nameInput.value = '';
		emailInput.value = '';
	}
}