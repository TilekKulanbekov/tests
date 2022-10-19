// Реализуйте функцию verify(text), которая проверяет наличие круглых скобок в тексте. правильно вложены.
// Вам нужно рассмотреть три вида: (), [], <> и только эти виды.

function verify(text) {
    const brackets = {
        '(': ')',
        '[': ']',
        '<': '>',
    };
    const stack = []; // создаем пустой массив
    for (let i = 0; i < text.length; i += 1) { // проходимся по строке
        const bracket = text[i]; // берем символ строки
        if (brackets[bracket]) { // если символ есть в объекте brackets
        stack.push(bracket); // добавляем его в массив
        } else if (bracket === brackets[stack[stack.length - 1]]) { // если символ равен последнему элементу массива
        stack.pop(); // удаляем последний элемент массива
        }
    }
    return stack.length === 0; // если длина массива равна 0, то возвращаем true, иначе false
}

console.log(verify("---(++++)----")); // true
console.log(verify("")); // true
console.log(verify("before ( middle []) after ")); // true
console.log( verify("(  [  <>  ()  ]  <>  )")); // true
console.log(verify("   (      [)")); // false
console.log(verify("<(   >)")); // false


//
// Упростите приведенную ниже реализацию настолько, насколько это возможно.
//     Еще лучше, если вы также сможете повысить производительность как часть упрощения!
//
//     Также нужно понять что делает эта функция и описать это в комментариях.

//     function func(s, a, b)
// {
//     var match_empty=/^$/ ;
//     if (s.match(match_empty))
//     {
//         return -1;
//     }
//     else
//     {
//         var i=s.length-1;
//         var aIndex=-1;
//         var bIndex=-1;
//         while ((aIndex==-1) && (bIndex==-1) && (i>=0))
//         {
//             if (s.substring(i, i+1) == a)
//                 aIndex=i;
//             if (s.substring(i, i+1) == b)
//                 bIndex=i;
//             i--;
//         }
//         if (aIndex != -1)
//         {
//             if (bIndex == -1)
//                 return aIndex;
//             else
//                 return Math.max(aIndex, bIndex);
//         }
//         else
//         {
//             if (bIndex != -1)
//                 return bIndex;
//             else
//                 return -1;
//         }
//     }
// };

function func(s, a, b) { // функция принимает 3 аргумента: строку, символ и символ
    const aIndex = s.lastIndexOf(a); // находим последнее вхождение символа a в строку
    const bIndex = s.lastIndexOf(b); // находим последнее вхождение символа b в строку
    return Math.max(aIndex, bIndex); // возвращаем максимальное значение
}

console.log(func("Hello World", "o", "l")); // 8
console.log(func("Hello World", "l", "o")); // 9
console.log(func("Hello World", "a", "b")); // -1
console.log(func("Hello World", "b", "a")); // -1