//2. Необходимо создать html-страницу с названием 2.html, в которой 
//подключить файл 2.js (его тоже необходимо создать рядом с html-файлом). 
//В js-файле необходимо создать следующий скрипт:

//Cоздать функцию greeting, которая принимает имя и выводит приветствие, 
//используя переданное имя, в консоль.

//Необходимо у пользователя запросить имя и вызвать функцию greeting, 
//передав туда данное значение.

function greeting(nameUser) {
    return console.log("Здравствуйте "+nameUser);
}

const nameUser = prompt("Как Вас зовут ?");

greeting(nameUser);

const nameForOutPut = document.getElementById('idNameUser');

nameForOutPut.innerHTML = nameUser;