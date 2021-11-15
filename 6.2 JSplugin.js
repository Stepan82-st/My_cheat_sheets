
(function (window) {

	// приватные методы
	// ...
	// ...
	
	function extend(a, b) { // Стефанов с.169
		for (var key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}

	// конструктор плагина
	function JSPlugin(el, Options) {
		// DOM элемент
		this.el = el;

		// объединение опций
		this.options = extend({}, this.options);
		extend(this.options, Options);

		// инициализация
		this._init();

	}

	JSPlugin.prototype.options = {

		// опции по умолчанию

	};

	JSPlugin.prototype._init = function () {

		// сохранить (при необходимости) 
		// ссылку на this конструктора 
		// для вызова/использования в других контекстах 
		var sElf = this;

		// инициализация плагина
		//             .
		//             .
		//             .

		// привязка (инициализация) событий
		this._initEvents();
	};

	JSPlugin.prototype._initEvents = function () {

		// сохранить (при необходимости) 
		// ссылку на this конструктора 
		// для вызова/использования в других контекстах 
		var sElf = this;

		// привязка (инициализация) событий
		//             .
		//             .
		//             .

	};

	// публичные методы

	JSPlugin.prototype.method1 = function () {};
	JSPlugin.prototype.method2 = function () {};
	JSPlugin.prototype.method3 = function () {};
	// ...
	JSPlugin.prototype.methodN = function () {};

	// добавление в глобальную область видимости
	window.JSPlugin = JSPlugin;

})(window);

// применение

var a = document.querySelectorAll("#box")[0];

var pl = new JSPlugin(a, {/* опции */})

	pl.method3();
