////////////////////////////////////////////////////////////////////////////////
// AJAX (Asynchronous Javascript and XML — "асинхронный JavaScript и XML")
//  - "фоновый" обмен данными с web-сервером без перезагрузки web-страницы
//
// для обмена данными используется API объекта (объектов типа) XMLHttpRequest 
// (XHR - сокращенное название)
//
// методы (используемые в примере) объекта XHR:
//
//     open(метод_отправки, адрес_отправки_с_параметрами, true-асинхронно) -
//         инициализация запроса
//
//     send() - отправка запроса:
//                  send(параметры_запроса_в_URL_формте) - для метода POST
//                  send(null) - для метода GET
//
//     setRequestHeader(имя_заголовка, значение_заголовка) -
//         устанавливает заголовок запроса (только для метода POST)
//         [https://ru.wikipedia.org/wiki/Список_MIME-типов]
//
// свойства (используемые в примере) объекта XHR:
//
//     readyState - значение состояния запроса:
//                      запрос не инициализирован : 0
//                      устанавливается соединение с сервером : 1
//                      запрос получен : 2
//                      обработка запроса : 3
//                      запрос завершен и ответ готов : 4
// 
//         или соответствующие свойства (константы) объекта XHR :
//                      запрос не инициализирован (0) : XMLHttpRequest.UNSENT
//                      устанавливается (1) соединение с сервером : XMLHttpRequest.OPENED
//                      запрос получен (2) : XMLHttpRequest.HEADERS_RECEIVED
//                      обработка запроса (3) : XMLHttpRequest.LOADING
//                      запрос завершен и ответ готов (4) : XMLHttpRequest.DONE
//

//
//     responseText - ответ на запрос в виде строки;
//
//     status - код состояния HTTP (ответ сервера)
//              [https://ru.wikipedia.org/wiki/Список_кодов_состояния_HTTP];
// 
// 

// encodeURIComponent() - кодирует URI-символы, чтобы избежать 
//     неожиданных (с не разрешенными символами) запросов к серверу [encodeURIComponent() mdn]

var u = "http://site.net/word.php?p1=кирилица&p2=только латиница?&p3=ascii";

console.log(encodeURIComponent(u));//>  http%3A%2F%2Fsite.net%2Fword.php%3F
                                   //   p1%3D%D0%BA%D0%B8%D1%80%D0%B8%D0%BB
                                   //   %D0%B8%D1%86%D0%B0%26p2%3D%D1%82%D0
                                   //   %BE%D0%BB%D1%8C%D0%BA%D0%BE%20%D0%BB
                                   //   %D0%B0%D1%82%D0%B8%D0%BD%D0%B8%D1%86
                                   //   %D0%B0%3F%26p3%3Dascii

// общий пример запроса данных (запрос на выполнение PHP-скрипта)
// 
// PHP-скрипт:
// 
//     <?PHP
// 
//         /* ... */
// 
//         echo /* ответ_на_запрос */ ;
// 
//         /* ... */
// 
//     ?>
// 

var activeXids = [// для IE до версии 7 [Стефанов, с.236]
	"MSXML2.XMLHTTP.3.0",
	"MSXML2.XMLHTTP",
	"Microsoft.XMLHTTP"
];

if (typeof XMLHttpRequest === "function") { // встроенный объект XHR

	var xmlhttp = new XMLHttpRequest();

} else { // для IE до версии 7 [Стефанов, с.236]

	for (var i = 0; i < activeXids.length; i += 1) {

		try {
			xmlhttp = new ActiveXObject(activeXids[i]);
			break;

		} catch (e) {}

	}

}

// "readystatechange" - событие изменения значения свойства readyState
xmlhttp.addEventListener("readystatechange", 
	function (e) {

	if (xmlhttp.readyState == XMLHttpRequest.DONE) {

		if (xmlhttp.status == 200) {
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		} else if (xmlhttp.status == 400) {
			alert('Код ошибки - 400 (некорректный запрос)');
		} else {
			alert('Возвращен какой-то код состояния');
		}

	}

}, false);

// вариант для отправки запроса методом GET
var params = 'p1=' +
	encodeURIComponent(value1) +
	'&p2=' +
	encodeURIComponent(value2);

xmlhttp.open("GET", '/script.php?' + params, true);
xmlhttp.send(null);

// или вариант для отправки запроса методом POST
var params = 'p1=' +
	encodeURIComponent(value1) +
	'&p2=' +
	encodeURIComponent(value2);

xmlhttp.open("POST", '/script.php', true);
xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xmlhttp.send(params);

////////////////////////////////////////////////////////////////////////////////
// JSON [http://www.json.org/json-ru.html] /////////////////////////////////////
// 
// Ответом на запрос XHR может быть документ любого типа:
//     - XML (исторически)
//     - Фрагмент HTML (что весьма обычно)
//     - Данные в формате JSON (простой и удобный формат)
//     - Простой текстовый файл или документ в любом другом формате
//                                                      [Стефанов, с.237]
// 
// JSON (JavaScript Object Notation) - текстовый формат обмена данными, основанный на JavaScript
// JSON является синтаксисом для сериализации объектов [MDN] - 
//     представления объектов в виде строки	
// 
// пример описания данных XML vs JSON :
//                                                XML |  JSON
//                                       529 символов |  411 символов
// _____________________________________________________________________________________ 
//                                                    | 
//                                                    | '{
//                                                    |    "kontora": {
//                                                    |      "person": [
//                                                    |        {
//                                                    |          "nm": "Сидор",
//  '<kontora>                                        |          "fm": "Сидоров",
//      <person nm = "Сидор" fm = "Сидоров">          |          "phon": "322-233-323",
//          <phon>322-233-323</phon>                  |          "marital": "не женат",
//          <marital>не женат</marital>               |          "stat": "планктон",
//          <stat>планктон</stat>                     |          "salary": {
//          <salary>                                  |            "total": "500",
//              <total>500</total>                    |            "bonus": "100"
//              <bonus>100</bonus>                    |          }
//          </salary>                                 |        },
//      </person>                                     |        {
//      <person nm = "Антуан" fm = "Fox">             |          "nm": "Антуан",
//          <phon>233-322-323</phon>                  |          "fm": "Fox",
//          <marital>разведен</marital>               |          "phon": "233-322-323",
//          <stat>планктон</stat>                     |          "marital": "разведен",
//          <salary>                                  |          "stat": "планктон",
//              <total>500</total>                    |          "salary": {
//              <bonus>105</bonus>                    |            "total": "500",
//          </salary>                                 |            "bonus": "105"
//      </person>                                     |          }
//      <person nm = "Кондрат" fm = "Филимонов">      |        },
//          <phon>323-322-233</phon>                  |        {
//          <marital>не женат</marital>               |          "nm": "Кондрат",
//          <stat>работник</stat>                     |          "fm": "Филимонов",
//          <salary>                                  |          "phon": "323-322-233",
//              <total>1500</total>                   |          "marital": "не женат",
//              <bonus>7</bonus>                      |          "stat": "работник",
//          </salary>                                 |          "salary": {
//      </person>                                     |            "total": "1500",
//  </kontora>'                                       |            "bonus": "7"
//                                                    |          }
//                                                    |        }
//                                                    |      ]
//                                                    |    }
//                                                    | '}
// 

////////////////////////////////////////////////////////////////////////////////
// глобальные функции JSON.stringify() и JSON.parse() //////////////////////////
// JSON.stringify(объект) - преобразует (сериализует) объект в строку формата JSON
// JSON.parse(JSON_строка) - преобразует строку формата JSON в объект

var kontora = {
	"kontora" : {
		"person" : [{
				"nm" : "Сидор",
				"fm" : "Сидоров",
				"phon" : "322-233-323",
				"marital" : "не женат",
				"stat" : "планктон",
				"salary" : {
					"total" : "500",
					"bonus" : "100"
				}
			}, {
				"nm" : "Антуан",
				"fm" : "Fox",
				"phon" : "233-322-323",
				"marital" : "разведен",
				"stat" : "планктон",
				"salary" : {
					"total" : "500",
					"bonus" : "105"
				}
			}, {
				"nm" : "Кондрат",
				"fm" : "Филимонов",
				"phon" : "323-322-233",
				"marital" : "не женат",
				"stat" : "работник",
				"salary" : {
					"total" : "1500",
					"bonus" : "7"
				}
			}
		]
	}
};

var stringKontora = JSON.stringify(kontora);

console.log(typeof stringKontora + ": ", stringKontora);
             // '{"kontora":{"person":[{"nm":"Сидор","fm":"Сидоров"
             // ,"phon":"322-233-323","marital":"не женат","stat":"планктон","sa
             // lary":{"total":"500","bonus":"100"}},{"nm":"Антуан","fm":"Fox","
             // phon":"233-322-323","marital":"разведен","stat":"планктон","sala
             // ry":{"total":"500","bonus":"105"}},{"nm":"Кондрат","fm":"Филимон
             // ов","phon":"323-322-233","marital":"не женат","stat":"работник",
             // "salary":{"total":"1500","bonus":"7"}}]}}'
	
var newKontora = JSON.parse(stringKontora);

console.log(compare(kontora, newKontora));// true

// compare() - функция глубокого копирования объектов [Стефанов, с.169-171]
// модифицированная для "глубокого сравнения" объектов по свойствам и их значениям
// если один из объектов является полной копией другого возвращается true

function compare(obj1, obj2) {

	if (!obj1 && !obj2)
		return false;

	var toStr = Object.prototype.toString,
	astr = "[object Array]",
	out = true;

	return eqv(obj1, obj2) && eqv(obj2, obj1);

	function eqv(a, b) {
		for (var i in a) {
			if (out && a.hasOwnProperty(i))
				if (i in b) {
					if (typeof a[i] === "object" && typeof b[i] === "object") {
						eqv(a[i], b[i]);
					} else {
						if (b[i] !== a[i])
							out = false;
					}
				} else
					out = false;
		}
		return out;
	}
}