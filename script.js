// Сортировка

// Написать функцию которая сортирует слова в строке по цифре которая находится в слове.
// В рамках данной задачи цифры НЕ могут быть двухзначные и больше.

// sortWords('A3lice 2Bob Er1nst') // 'Er1nst 2Bob A3lice';
// sortWords('2Fiona Ig7or J1amila B3ob Ali5ce') // 'J1amila 2Fiona B3ob A3lice Ig7or';
// sortWords('Tes1t') // 'Tes1t';


function sortWords(str){
    var getArr = str.split(' ');
    var getWord = [];
    for(var i = 0; i < getArr.length; i++){
       getWord[i] = getArr[i].split('');
        getWord[i].sort();
        getWord[i] = getWord[i].join('');      
    }
    
    var arrObject = [];
    for (var i = 0; i < getArr.length; i++){
        arrObject.push({key1 : getArr[i], key2 : getWord[i]})
    }
    
    arrObject.sort (function (a,b){
        if (a.key2 < b.key2) return -1;
    });

    var getSort = [];

    for (var i = 0; i < arrObject.length; i++){
        getSort.push (arrObject[i].key1);
    }
    return getSort.join(' ');
}

alert (sortWords('A3lice 2Bob Er1nst')); // 'Er1nst 2Bob A3lice';
alert (sortWords('2Fiona Ig7or J1amila B3ob Ali5ce')); // 'J1amila 2Fiona B3ob A3lice Ig7or';
alert (sortWords('Tes1t')); // 'Tes1t';
