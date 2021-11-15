//////////////
// бездельники
//////////////
function Plankton(personData){

	personData = personData || {};

	this.nm = personData.n || "кто-то";
	this.fm = personData.f || "неизвестный";
	this.stat = personData.s || "стажер";

}
Plankton.prototype.personal = function () {

	console.log(this.nm + " " + this.fm + " сейчас " + this.stat);

	return this;

};
Plankton.prototype.rise = function () {

	switch (this.stat) {
	case "стажер":
		this.stat = "планктон";
		break;
	case "планктон":
		this.stat = "вожак бабуинов";
		break;
	case "вожак бабуинов":
		this.stat = "манагер";
		break;
	default:
		if (this.stat.indexOf("везучий") === -1)
			this.stat = "везучий " + this.stat;
		break;
	}

	return this;

};
Plankton.prototype.low = function () {

	switch (this.stat) {
	case "вожак бабуинов":
		this.stat = "планктон";
		break;
	case "манагер":
		this.stat = "вожак бабуинов";
		break;
	default:
		if (this.stat.indexOf("ленивый") === -1)
			this.stat = "ленивый " + this.stat;
		break;
	}

	return this;

};

/////////////
// сотрудники 
/////////////
function Specialist(personData){

	personData = personData || {};

	this.nm = personData.n || "кто-то";
	this.fm = personData.f || "неизвестный";
	this.stat = personData.s || "стажер";	

}
Specialist.prototype.personal = function () {

	console.log(this.nm + " " + this.fm + " сейчас " + this.stat);

	return this;

};
Specialist.prototype.rise = function () {

	switch (this.stat) {
	case "стажер":
		this.stat = "специалист";
		break;
	case "специалист":
		this.stat = "старший специалист";
		break;
	case "старший специалист":
		this.stat = "главный специалист";
		break;
	default:
		if (this.stat.indexOf("высоко квалифицированный") === -1)
			this.stat = "высоко квалифицированный " + this.stat;
		break;
	}

	return this;

};
Specialist.prototype.low = function () {

	switch (this.stat) {
	case "главный специалист":
		this.stat = "старший специалист";
		break;
	case "старший специалист":
		this.stat = "специалист";
		break;
	default:
		if (this.stat.indexOf("посредственный") === -1)
			this.stat = "посредственный " + this.stat;
		break;
	}

	return this;

};


//
//          бездельники:                                  сотрудники:
//          Plankton                                      Specialist
//          _________                                     _________
//          nm                                            nm
//          fm                                            fm
//          stat                                          stat
//          personal()                                    personal()
//          rise()                                        rise()
//          low()                                         low()
//  
//
//  rise() и low() - "специфическая" реализация (кода) для каждого конструктора. 
//                                   |
//                      оставить в коде конструктора
//                      
//  nm, fm, stat, personal() - одинаковая реализация (кода) в обоих конструкторах.
//                                   |
//      можно вынести в общий конструктор предок "персонал" (Employee)
//  
//
//                               персонал:
//                               Employee    
//                               _________   
//                               nm          
//                               fm          
//                               stat        
//                               personal()
//                             /           \
//                            /             \
//                     наследование      наследование 
//                     свойств           свойств 
//                     от Employee       от Employee           
//                        /                     \
//                       /                       \
//                    бездельники:         сотрудники:
//                    Plankton             Specialist
//                    _________            ________
//                    rise()               rise()
//                    low()                low()
//   


///////////
// персонал
///////////
function Employee(personData) {

	personData = personData || {};

	this.nm = personData.n || "кто-то";
	this.fm = personData.f || "неизвестный";
	this.stat = personData.s || "стажер";

}



Employee.prototype.personal = function () {

	console.log(this.nm + " " + this.fm + " сейчас " + this.stat);

	return this;

};

//////////////////////////////////////////////////
// бездельники (наследуются свойства от персонала)
//////////////////////////////////////////////////
function Plankton(personData){

	// заимствование конструктора предка
	//
	// Zakas - The Principles Of Object-Oriented JavaScript (2014).pdf:
	//     Chapter 5 Inheritance - Constructor Inheritance
	Employee.apply(this, arguments);

}

// корректное копирование прототипа (содержимого prototype) предка
//
// Zakas - The Principles Of Object-Oriented JavaScript (2014).pdf:
//     Chapter 5 Inheritance - Constructor Stealing
//
// Object.create - методы конструктора Object см.: 
// developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object
Plankton.prototype = Object.create(Employee.prototype, {
		constructor : {// восстановить свойство constructor - ссылку на "родной" конструктор
			configurable : true,
			enumerable : true,
			value : Plankton,
			writable : true
		}
	});

Plankton.prototype.rise = function () {

	switch (this.stat) {
	case "стажер":
		this.stat = "планктон";
		break;
	case "планктон":
		this.stat = "вожак бабуинов";
		break;
	case "вожак бабуинов":
		this.stat = "манагер";
		break;
	default:
		if (this.stat.indexOf("везучий") === -1)
			this.stat = "везучий " + this.stat;
		break;
	}

	return this;

};

Plankton.prototype.low = function () {

	switch (this.stat) {
	case "вожак бабуинов":
		this.stat = "планктон";
		break;
	case "манагер":
		this.stat = "вожак бабуинов";
		break;
	default:
		if (this.stat.indexOf("ленивый") === -1)
			this.stat = "ленивый " + this.stat;
		break;
	}

	return this;

};

/////////////////////////////////////////////////
// сотрудники (наследуются свойства от персонала)
/////////////////////////////////////////////////
function Specialist(personData){

	Employee.apply(this, arguments);

}

Specialist.prototype = Object.create(Employee.prototype, {
		constructor : {
			configurable : true,
			enumerable : true,
			value : Specialist,
			writable : true
		}
	});

Specialist.prototype.rise = function () {

	switch (this.stat) {
	case "стажер":
		this.stat = "специалист";
		break;
	case "специалист":
		this.stat = "старший специалист";
		break;
	case "старший специалист":
		this.stat = "главный специалист";
		break;
	default:
		if (this.stat.indexOf("высоко квалифицированный") === -1)
			this.stat = "высоко квалифицированный " + this.stat;
		break;
	}

	return this;

};

Specialist.prototype.low = function () {

	switch (this.stat) {
	case "главный специалист":
		this.stat = "старший специалист";
		break;
	case "старший специалист":
		this.stat = "специалист";
		break;
	default:
		if (this.stat.indexOf("посредственный") === -1)
			this.stat = "посредственный " + this.stat;
		break;
	}

	return this;

};


var sidor = new Specialist({n:"Сидор"})