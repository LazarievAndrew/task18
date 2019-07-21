// Сортировка

// Написать функцию которая сортирует слова в строке по цифре которая находится в слове.
// В рамках данной задачи цифры НЕ могут быть двухзначные и больше.

// sortWords('A3lice 2Bob Er1nst') // 'Er1nst 2Bob A3lice';
// sortWords('2Fiona Ig7or J1amila B3ob Ali5ce') // 'J1amila 2Fiona B3ob A3lice Ig7or';
// sortWords('Tes1t') // 'Tes1t';

var example1 = 'A3lice 2Bob Er1nst';
var example2 = '2Fiona Ig7or J1amila B3ob Ali5ce';
var example3 = 'Tes1t';

function getArr(str){
    return str.split(' ');
}

function getNumber(word){
    for(var i = 0; i < word.length; i++){
        if (!isNaN(+word[i])){
            return word[i];
        }
    }
}

function sortWords(str){
    var sortArr = getArr(str);
    sortArr.sort(function(a, b){
        return getNumber(a) - getNumber(b);
    });
    return sortArr.join(' ');
}

console.log (sortWords(example1));
console.log (sortWords(example2));
console.log (sortWords(example3));