// Сортировка

// Написать функцию которая сортирует слова в строке по цифре которая находится в слове.
// В рамках данной задачи цифры НЕ могут быть двухзначные и больше.

// sortWords('A3lice 2Bob Er1nst') // 'Er1nst 2Bob A3lice';
// sortWords('2Fiona Ig7or J1amila B3ob Ali5ce') // 'J1amila 2Fiona B3ob A3lice Ig7or';
// sortWords('Tes1t') // 'Tes1t';

var example1 = 'A3lice 2Bob Er1nst';
var example2 = '2Fiona Ig7or J1amila B3ob Ali5ce';
var example3 = 'Tes1t';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

function getNum(str){
    var arrNumber = [];
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < str[i].length; j++){
            if (isNumeric(str[i].charAt(j))) {
                arrNumber.push(str[i].charAt(j));
            }
        }
    }
    return arrNumber;
}

function getObject(str){
    var getNumber = getNum(str);
    var getArr = str.split(' ');
    var arrObject = [];

    for(var i = 0; i < getNumber.length; i++){
        arrObject.push({key1 : getArr[i], key2 : getNumber[i]});
    }
    return arrObject;
}

function sortWords(str){
    var sorting = getObject(str).sort (function (a,b){
        if (a.key2 < b.key2) return -1;
    });

    var getSort = [];

    for (var i = 0; i < sorting.length; i++){
        getSort.push (sorting[i].key1);
    }
    return getSort.join(' ');
}

console.log (sortWords(example1));
console.log (sortWords(example2));
console.log (sortWords(example3));