////////////////////////////////////////////////////////////////////////////////
// встроенная поддержка массивов ///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var arrEx = [22, 48, 1, "sequi", "animi", 26, 13, 12, 83, 48, 77,
	"aliquam", "earum", "sed", 10, "inventore", "laudantium", 71,
	46, 58, "obcaecati", "nam", 59, 24, 22, "consectetur", 32, 50,
	42, 71, 12, "sint", 1, "expedita", "adipisci", 54, "dolorem",
	98, "quod", "eius", 92, "adipisicing", 28, 28, "velit", 97,
	93, 68, 36, 82, 45, "ipsa", 33, 66, 66, "soluta", "minus", 73,
	"qui", 56, 80, "hic", 26, 64, "amet", "officiis", "odit",
	"non", 88, 9, 90, 21, 71, 32, 50, 58, 34, "quibusdam", "aliquid",
	"elit", 96, 33, 17, 52, "dolorum", "sit", "expedita", "ipsum",
	99, 35, 23, 46, 77, 64, "ratione", "laudantium", "dolor", 62,
	"provident", "omnis", 58];

var arrEx2 = ["lorem", 243, "ipsum", 732, "dolor"];


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод concat() - конкатенация массивов

var a = arrEx.concat(arrEx2, "blue", 89, 21);

console.log(a);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод every() - проверка выполнения функции-предиката (- функция, принимающая
// один или более аргументов и возвращающая значения булева типа) для всех
// элементов массива;
// возвращает: true если для всех элементов функция-предикат вернула true, в противном случае false

var a = arrEx.every(function (x) {
		return x < 100 || typeof x === "string";
	});

console.log(a);

var a = arrEx.every(function (x) {
		return x > 5 || typeof x === "string";
	});

console.log(a);

var a = arrEx.every(function (x) {
		return typeof x === "string";
	});

console.log(a);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод filter() - проверка выполнения функции-предиката для каждого элемента массива;
// возвращает: новый массив элементов пропущенных функцией-предикатом

var a = arrEx.filter(function (x) {
		return x % 3 === 0 && x < 50;
	});

console.log(a);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод forEach() - выполняет функцию для каждого элемента;
// (!изменяет массив);
// ничего не возвращает

var arrTemp = arrEx.concat();// arrTemp - копия массива arrEx

arrTemp.forEach(function (x, i, arr) {

	if (typeof x === "number")
		arr[i] = x + 0.01;
	else
		arr[i] = "элемент " + i + " содержит: " + x;

});

console.log(arrTemp);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод indexOf() - поиск содержимого в элементах;
// возвращает: индекс первого найденного элемента, или -1 если элемент не найден

var a = arrEx.indexOf(77);

console.log(a);

var a = arrEx.indexOf(25);

console.log(a);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод join() - выполняет конкатенацию элементов массива в строку с разделителем;
// возвращает: строка элементов с разделителями

var a = arrEx.join();

console.log(a);

var a = arrEx.join(" | ");

console.log(a);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод lastIndexOf() - поиск содержимого в элементах, в обратном порядке - от последнего до первого элемента;
// возвращает: индекс ближайшего с конца массива найденного элемента, или -1 если элемент не найден

var a = arrEx.lastIndexOf(77);

console.log(a);


// встроенная поддержка массивов ///////////////////////////////////////////////
// свойство length - длинна массива (количество элементов)

var a = arrEx.length;

console.log(a);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод map() - выполняет функцию для каждого элемента массива, вычисленные функцией значения записываются в новый массив;
// возвращает: новый массив вычисленных элементов

var a = arrEx.map(function (x, i, arr) {

		return (typeof x === "number") ? (x + 0.055) : ("* " + x);

	});

console.log(a);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод pop() - удаляет последний элемент массива;
// (!изменяет массив);
// возвращает: удаленный элемент

var arrTemp = arrEx.concat();// arrTemp - копия массива arrEx

var a = arrTemp.pop();

console.log(a);

console.log(arrTemp);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод push() - добавляет последний элемент массива;
// (!изменяет массив)

var arrTemp = arrEx.concat();// arrTemp - копия массива arrEx

arrTemp.push(575);

console.log(arrTemp);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод reverse() - изменяет порядок следования в массиве на противоположный;
// (!изменяет массив)

var arrTemp = arrEx.concat();// arrTemp - копия массива arrEx

arrTemp.reverse();

console.log(arrTemp);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод shift() - удаление первого элемента массива со сдвигом элементов в начало;
// (!изменяет массив);
// возвращает: удаленный элемент

var arrTemp = arrEx.concat();// arrTemp - копия массива arrEx

var a = arrTemp.shift();

console.log(a);

console.log(arrTemp);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод slice() - фрагмент массива;
// возвращает: фрагмент массива от указанного индекса начала до указанного индекса перед концом фрагмента

var a = arrEx.slice(5, 10);

console.log(a);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод some() - проверка выполнения функции-предиката хотя бы для одного элемента массива;
// возвращает: true если функция-предикат хотя бы раз вернула true, в противном случае false

var a = arrEx.some(function (x) {
		return x === 65;
	});

console.log(a);

var a = arrEx.some(function (x) {
		return x === 78;
	});

console.log(a);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод sort() - сортирует элементы массива по результатам функции сравнения;
// (!изменяет массив)
// функция сравнения меняет индексы пар сравниваемых элементов в зависимости от возвращаемого значения:
// больше 0 - первый аргумент по большему индексу,
// меньше 0 - первый аргумент по меньшему индексу
// равно 0 - индексы аргументов без изменений

var arrTemp = arrEx.concat();// arrTemp - копия массива arrEx

arrTemp.sort(function (a, b) {
	if (typeof a === "number" && typeof b === "string") {
		return -1;
	} else
		if (typeof a === "string" && typeof b === "number") {
			return 1;
		} else
			return 0;
});

console.log(arrTemp);

arrTemp.sort(function (a, b) {

	if (typeof a === "number" && typeof b === "number") {

		return a - b;

	} else if (typeof a === "string" && typeof b === "string") {

		return  - (a < b) ||  + (a > b) || 0

	} else if (typeof a === "string" && typeof b === "number") {

		return 1;

	} else if (typeof a === "number" && typeof b === "string") {

		return -1;

	}

});

console.log(arrTemp);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод splice() - вставляет, удаляет или замещает элементы массива;
// (!изменяет массив)
// splice(с_какого_элемента, сколько_удалить, что_вставить1, что_вставить2, ..., что_вставитьN)

var arrTemp = arrEx.concat();// arrTemp - копия массива arrEx

arrTemp.splice(3, 2);

console.log(arrTemp);

arrTemp = arrEx.concat();

arrTemp.splice(3, 0, "new1", "new2");

console.log(arrTemp);

arrTemp = arrEx.concat();

arrTemp.splice(3, 96, "new1", "new2", "new3");

console.log(arrTemp);


// встроенная поддержка массивов ///////////////////////////////////////////////
// метод unshift() - вставляет элементы в начало массива со сдвигом элементов к концу

var arrTemp = arrEx.concat();

arrTemp.unshift(15);

console.log(arrTemp);

arrTemp = arrEx.concat();

arrTemp.unshift(15, "new1", "new2");

console.log(arrTemp);

////////////////////////////////////////////////////////////////////////////////
// встроенная поддержка строк //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var strEx = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, neque, saepe, itaque possimus consectetur ratione corporis sunt accusamus quidem impedit alias corrupti labore qui magnam obcaecati id eveniet perferendis velit et amet ipsam totam nesciunt dolorem! Et, molestiae sint illum doloribus eveniet rem dolorum sunt minima dolores in veritatis natus repellendus distinctio est assumenda? Impedit, delectus mollitia numquam unde sed voluptatibus atque dicta porro exercitationem minima voluptate voluptatem a doloremque illum consequatur quo nobis ullam veritatis odit quae quam id repellendus perspiciatis inventore repellat. Sed, aliquid, minima illo veniam hic repellendus id quae voluptas itaque facilis rem facere dignissimos officiis!";

// встроенная поддержка строк //////////////////////////////////////////////////
// метод charAt() - возвращает символ строки по его индексу (номеру позиции в строке)

var a = strEx.charAt(23);

console.log(a);

a = strEx.charAt(0);

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод charCodeAt() - возвращает код символа (Unicode в dec-формате) строки по его индексу (номеру позиции в строке)

var a = strEx.charCodeAt(23);

console.log(a);

a = strEx.charCodeAt(0);

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод concat() - объединяет строки

var a = strEx.concat("Add string.");

console.log(a);

a = strEx.concat(" ...", "Add string.", " ", "Море string.");

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод indexOf() - поиск подстроки в строке;
// возвращает: номер позиции первого вхождения подстроки

var a = strEx.indexOf(" id ");

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод lastIndexOf() - поиск подстроки в строке с конца;
// возвращает: номер позиции первого вхождения подстроки

var a = strEx.lastIndexOf(" id ");

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// свойство length - длина строки (количество символов)

var a = strEx.length;

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод match() - находит соответствия регулярному выражению;
// возвращает: массив результатов поиска

var a = strEx.match(/\b[mn]+[a-z]+\b/g);

console.log(a);

var a = strEx.match(/\b(mi|ne)+[a-z]+\b/g);

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод replace() - заменяет подстроки соответствующие регулярному выражению;
// возвращает: строку с результатами замены

var a = strEx.replace(/\b[mn]+[a-z]+\b/g, "\"letter m or n\"");

console.log(a);

var a = strEx.replace(/\b(mi|ne)+[a-z]+\b/g, "-($&)");

console.log(a);

var a = strEx.replace(/\b(mi|ne)+[a-z]+\b/g, function (word) {

		return word + "(?!)";

	});

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод search() - находит соответствие регулярному выражению;
// возвращает: позицию первого вхождения подстроки соответствующей регулярному выражению, в противном случае -1

var a = strEx.search(/\b[m]+[a-z]+\b/g);

console.log(a);

var a = strEx.search(/\b[ё]+[a-z]+\b/g);

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод slice() - извлечение подстроки;
// возвращает: новая строка, фрагмент от указанного индекса начала до указанного индекса перед концом фрагмента
// отрицательные аргументы отсчитываются от конца строки
var a = strEx.slice(12, 28);

console.log(a);

a = strEx.slice(-113, -93);

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод split() - разбивает строку на массив строк по указанному разделителю

var a = strEx.split(" ");

console.log(a);

var a = strEx.split("e");

console.log(a);

var a = strEx.split(/(e)/);

console.log(a);

var a = strEx.split("");

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод substr() - извлекает подстроку указанной длинны

var a = strEx.substr(6, 11);

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод substring() - извлечение подстроки;
// возвращает: новая строка, фрагмент от указанного индекса начала до указанного индекса перед концом фрагмента
// отрицательные аргументы интерпретируются как равные нулю

var a = strEx.substring(12, 28);

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод toLowerCase() - преобразует символы строки в нижний регистр;
// возвращает: новая строка в нижнем регистре

var a = strEx.toLowerCase();

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод toUpperCase() - преобразует символы строки в верхний регистр;
// возвращает: новая строка в верхнем регистре

var a = strEx.toUpperCase();

console.log(a);


// встроенная поддержка строк //////////////////////////////////////////////////
// метод trim() - удаляет начальные и конечные пробельные символы

var strEx2 = "   Lorem ipsum dolor sit amet ";

console.log(strEx2);

var a = strEx2.trim();

console.log(a);


////////////////////////////////////////////////////////////////////////////////
// математические функции //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var a = 23.754;


// математические функции ...
// метод floor() - округляет число вниз

var b = Math.floor(a);

console.log(b);


// математические функции ...
// метод ceil() - округляет число вверх

b = Math.ceil(a);

console.log(b);


// математические функции ...
// метод round() - округляет число до ближайшего целого

b = Math.round(a);

console.log(b);


// математические функции ...
// метод random() - псевдослучайное число от 0 до 1

b = Math.random();

console.log(Math.ceil(b * 100));

console.log(Math.ceil(Math.random() * 100));

console.log(Math.ceil(Math.random() * 100));

console.log(Math.ceil(Math.random() * 100));

console.log(Math.ceil(Math.random() * 100));

console.log(Math.ceil(Math.random() * 100));

console.log(Math.ceil(Math.random() * 100));

console.log(Math.ceil(Math.random() * 100));

console.log(Math.ceil(Math.random() * 100));

console.log(Math.ceil(Math.random() * 100));

////////////////////////////////////////////////////////////////////////////////
// length                            26.8  26.0
// push                              8.1   34.0
// match                             8.1   42.0
// filter                            6.0   48.0
// replace                           4.6   53.0
// indexof                           4.2   57.0
// split                             4.2   61.0
// slice                             3.3   65.0
// charat                            3.0   68.0
// some                              2.9   71.0
// round                             2.8   74.0
// substr                            2.3   76.0
// concat                            2.3   78.0
// map                               2.2   80.0
// foreach                           2.2   83.0
// join                              2.0   85.0
// splice                            2.0   87.0
// tolowercase                       1.9   88.0
// shift                             1.8   90.0
// search                            1.6   92.0
// pop                               1.0   93.0
// sort                              0.9   94.0
// trim                              0.9   95.0
// every                             0.9   96.0
// reverse                           0.9   97.0
// substring                         0.9   97.0
// unshift                           0.6   98.0
// touppercase                       0.5   99.0
// floor                             0.4   99.0
// random                            0.2   99.0
// ceil                              0.2   99.0
// lastindexof                       0.1   99.0
// charcodeat                        0.0   100
