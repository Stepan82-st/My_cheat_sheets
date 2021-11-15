	
	// коэффициенты квадратного уравнения
	var a /* = 1 */, b /* = -1 */, c /* = -1 */; 
	
	// строка текстового оформления ответа
	// и хода решения уравнения в консоль
	var prnt;

	if (!a && b) {

		prnt = b + "x" + (c > 0 ? ("+" + c) : (c < 0 ? c : "")) + " = 0\na = 0, следовательно уравнение линейное\n\n";

	} else if (!a && !b) {

		prnt = "не заданы коэффициенты\n\n";

	} else {

		// вычисление дискриминанта и корней уравнения;

		var D = b * b - 4 * a * c;

		var x_1 = false,
		x_2 = false;

		if (D > 0) {

			x_1 = (-b - Math.sqrt(D)) / (2 * a);
			x_2 = (-b + Math.sqrt(D)) / (2 * a);

		} else if (D === 0) {

			x_1 = -b / (2 * a);

		}

		prnt =
			/////////////////////////
			//// текст уравнения ////
			a + "x\u00b2" +
			// формируется знак перед коэффициентом b
			((b >= 0 && ("+")) || ("")) + b + "x" +
			// формируется знак перед коэффициентом c
			((c >= 0 && ("+")) || ("")) + c +
			" = 0\n\n" +

			/////////////////////////////
			//// текст дискриминанта ////
			"D = " + b + "\u00b2 " +
			// формируется знак перед "4*a*c"
			(a * c > 0 ? "-" : "+") + " 4*" +
			// исключается минус, для корректной печати, сомножителя a
			(a < 0 ? -1 : 1) * a + "*" +
			// исключается минус, для корректной печати, сомножителя c
			(c < 0 ? -1 : 1) * c +
			" = " + D +

			//////////////////////////////////////////////////////////////////////////
			//// текст о дальнейшем ходе решения на основе величины дискриминанта ////
			(D < 0 && "\nD < 0, следовательно нет решений" || "") +
			(!D && "\nD = 0, следовательно одно решение" || "") +

			/////////////////////////////////
			//// текст нахождения корней ////
			// если x1 существует, перейти на новую строку и написать букву x
			// с индексом 1 если x2 существует,
			// или если x2 не существует то индекс не писать
			(x_1 !== false && ("\nx" + (x_2 !== false && "\u2081" || "") +
			//
			" = (" + (-1 * b) + " - \u221a" + D + "\u02fa)/(" +
			// формируется минус в случае отрицательного a до сомножителя "2" (-2*a)
			(a < 0 ? "-" : "") + "2*" +
			// исключается минус перед сомножителем a
			(a < 0 ? -1 : 1) * a + ") = " +
			// или, если x1 не существует, то пустая строка
			x_1) || "") +
			// если x2 существует, перейти на новую строку и написать букву x,
			// с индексом 2
			(x_2 !== false && ("\nx\u2082 = (" +
			//
			(-1 * b) + " + \u221a" + D + "\u02fa)/(" +
			// формируется минус в случае отрицательного a до сомножителя "2" (-2*a)
			(a < 0 ? "-" : "") + "2*" +
			// исключается минус перед сомножителем a
			((a < 0 ? -1 : 1) * a) + ") = " +
			// или, если x2 не существует, то пустая строка
			x_2) || "") +

			//////////////////////
			//// текст ответа ////
			// если x1 и x2 существуют, то формируется ответ для двух корней
			("\n\nОтвет: " + (x_1 !== false && x_2 !== false && ("x\u2081=" + x_1 + ", x\u2082=" + x_2) ||
			// или для одного корня
			((x_1 || x_2) && ("x=" + x_1 || x_2) ||
			// или сообщение об отсутствии решений
			"нет решений или x=\u2205")) + "\n\n");

	}
		
console.log(prnt);	
	