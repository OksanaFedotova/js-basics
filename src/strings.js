//В данном задании вам могут понадобиться следующие методы строки: trim, replace, repeat и свойство length.
// Реализуйте следующие функции (соблюдайте именование): 

/*
Реализуйте функцию concatenateStrings, которая принимает две строки в качестве аргументов, возвращает результат 
их конкатенации и удаляет все пробелы.

'aa', 'bb' => 'aabb'
'aa',' '    => 'aa'
'',  'bb'  => 'bb'

*/

//Ваше решение:


//Реализуйте функцию getStringLength, которая принимает строку в качестве аргумента и возвращает ее длину.

//Ваше решение:



/*
Реализуйте функцию getStringFromTemplate, которая принимает параметры firstName и lastName 
и возвращает результат подстановки этих значений в строку-шаблон 'Hello, firstName  lastName!'.
Важно: используйте интерполяцию (шаблонные строки) для формирования результата, а не операцию конкатенации.

'John','Doe'      => 'Hello, John Doe!'
'Chuck','Norris'  => 'Hello, Chuck Norris!'

*/

//Ваше решение:




/*
Реализуйте функцию getChar, которая принимает строку и порядковый номер символа в строке 
и возвращает символ, соответствующий этому порядковому номеру.

'John Doe', 1  => 'J'
'cat', 3       => 't'

*/

//Ваше решение:

/*
Реализуйте функцию removeFirstOccurrences, которая удаляет первое вхождение подстроки  внутри строки.

'To be or not to be', 'not'  => 'To be or  to be'
'I like legends', 'end' => 'I like legs',
'ABABAB','BA' => 'ABAB'
*/

//Ваше решение:


/* 
Реализуйте функцию getRectangleString, которая  возвращает строковое представление прямоугольника 
с заданной шириной и высотой, используя символы '*'.
        *****
5, 4 => *   *
        *   *
        *****

*/

//Ваше решение:
 


export {getRectangleString, concatenateStrings, getStringLength, removeFirstOccurrences, getChar, getStringFromTemplate}