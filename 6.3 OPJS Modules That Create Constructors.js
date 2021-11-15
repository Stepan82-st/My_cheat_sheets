var Wrap = function () {
	
	/* частные переменные (свойства) */
	var a, b, c /* , ... */ ;

	/* частные функции (методы) */
	function fnPrivate1() {
	
	}
	function fnPrivate2() {
	
	}
	function fnPrivate3() {
	
	}
	/* 
	function fnPrivateN(){
	
	}
	
	...
		
	*/

	/* конструктор */
	function constr() {
		/* публичные свойства */
		this.d /* =  ... */;
		this.e /* =  ... */;
	 /* this. ... =  ... ; */

	}

	/* публичные методы */
	constr.prototype.pub1 = function () {
		/* код с вызовом частных свойств и методов */
	};
	constr.prototype.pub2 = function () {
		/* код с вызовом частных свойств и методов */
	};
	/* 
	constr.prototype.pubN = function () {
		...
		код с вызовом частных свойств и методов
		...
	}; 
	
	...
	
	*/

	return constr;

}();
