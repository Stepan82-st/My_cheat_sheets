﻿/* 
	Элементы:
		Поиск (Выбор) ........... стрк. 13
		Изменение ............... стрк. 26
		Чтение .................. стрк. 41
	Классы ...................... стрк. 61
	Узлы:
		Поиск/Выбор ............. стрк. 74
		Действия над узлами ..... стрк. 91
		Чтение содержимого ...... стрк. 109
*/

//// Поиск (Выбор) ///////////////////
//////////////////////////////////////

/* поиск элемента по идентификатору */
найденный_элемент = документ_или_элемент_документа.getElementById("имя_идентификатора");
/* поиск элемента по классу */
массивоподобный_объект_найденных_элементов = документ_или_элемент_документа.getElementsByClassName("имя_класса");
/* поиск элемента по имени тега */
массивоподобный_объект_найденных_элементов = документ_или_элемент_документа.getElementsByTagName("имя_тега");
/* поиск элемента по CSS-селектору */
массивоподобный_объект_найденных_элементов = документ_или_элемент_документа.querySelectorAll("селектор_в _формате_CSS");


//// Изменение ///////////////////////
//////////////////////////////////////

/* изменение свойства атрибута-стиля элемента */
элемент_документа.style.свойство = "значение";
/* изменение правила атрибута-стиля элемента */
элемент_документа.style.cssText = "строка_свойств";
/* изменение атрибута элемента */
элемент_документа.стандартный_атрибут = "значение";
/* изменение нестандартного атрибута элемента */
элемент_документа.setAttribute("атрибут", "значение");
/* изменение класса элемента */
элемент_документа.className = "имя_класса";


//// Чтение //////////////////////////
//////////////////////////////////////

/* чтение свойства атрибута-стиля элемента */
строковое_значение = элемент_документа.style.свойство;
/* чтение правила атрибута-стиля элемента */
строковое_значение = элемент_документа.style.cssText;
/* чтение атрибута элемента */
строковое_значение = элемент_документа.стандартный_атрибут;
/* чтение нестандартного атрибута элемента */
строковое_значение = элемент_документа.getAttribute("атрибут");
/* проверка наличия нестандартного атрибута элемента */
булево_значение = элемент_документа.hasAttribute("атрибут");
/* чтение класса элемента */
строковое_значение = элемент_документа.className;

/* чтение (вычисление) свойств стилей */
строковое_значение = window.getComputedStyle(элемент_документа).свойство;


//// Классы //////////////////////////
//////////////////////////////////////

/* проверить наличие класса у элемента */
булево_значение = элемент_документа.classList.contains("имя_класса");
/* удалит класс элемента */
элемент_документа.classList.remove("имя_класса");
/* добавить класс элементу */
элемент_документа.classList.add("имя_класса");
/* переключает (удаляет если есть/добавляет если нет) класс элемента */
булево_значение = элемент_документа.classList.toggle("имя_класса");


//// Узлы (Поиск/Выбор) ////////////////////
//////////////////////////////////////

/* возвращает родительский узел элемента */
элемент = элемент_документа.parentNode;
/* возвращает предшествующий смежный узел элемента */
элемент = элемент_документа.previousElementSibling;
/* возвращает следующий смежный узел элемента */
элемент = элемент_документа.nextElementSibling;
/* возвращает дочерние узлы элемента */
массивоподобный_объект_дочерних_элементов = элемент_документа.children;
/* возвращает первого из дочерних узлов элемента */
элемент = элемент_документа.firstElementChild;
/* возвращает последнего из дочерних узлов элемента */
элемент = элемент_документа.lastElementChild;


//// Узлы (Действия над узлами) //////
//////////////////////////////////////

/* добавляет дочерний узел элемента в конец */
элемент_документа.appendChild(добавляемый_узел);
/* добавляет дочерний узел элемента перед заданным */
элемент_документа.insertBefore(добавляемый_узел, заданный_узел);
/* удаляет дочерний узел элемента */
удаляемый_узел = элемент_документа.removeChild(удаляемый_узел);
/* заменяет дочерний узел элемента на заданный */
заменяемый_узел = элемент_документа.replaceChild(заданный_узел, заменяемый_узел);
/* возвращает копию элемента */
элемент = элемент_документа.cloneNode();

/* создает узел элемента */
элемент = document.createElement("имя_тега");


//// Узлы (Чтение содержимого) ///////
//////////////////////////////////////

/* HTML-содержимое узла элемента (запись/чтение) */
элемент_документа.innerHTML = строковое_значение;
строковое_значение = элемент_документа.innerHTML

/* текстовое содержимое узла элемента (запись/чтение) */
элемент_документа.textContent = строковое_значение;
строковое_значение = элемент_документа.textContent