function Person (name) {
	this.name = name;
}

Person.prototype.sayHello = function (){
	console.log ("my name is " + this.name);
}

sheldon = new Person ("Sheldon");

sheldon.sayHello = function(){console.log("i'm Sheldon Chaves")};

mario = new Person ("Mario");

function object(o){
	function F(){};
	F.prototype = o;
	return new F();
}

tomas = object(sheldon);

tomas.sayHello();
//> i'm Sheldon Chaves