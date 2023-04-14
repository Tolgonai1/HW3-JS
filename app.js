
// tODO ДЗ1:
//  ⁃ При помощи цикла for напишите программу «FizzBuzz», которая будет выводить в консоли все числа от 1 до 100 с тремя исключениями:
//  ⁃ 1)Если число делится нацело на 3, вместо числа должно выводиться «Fizz»
//  ⁃ 2)Если число нацело делится на 5 (но не на 3), вместо числа должно выводиться «Buzz»
//  ⁃ 3)После этого сделайте так, чтобы программа выводила «FizzBuzz» для чисел, которые делятся и на 3, и на 5

for(var i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    } else if (i % 3 === 0){
        console.log('Fizz')
    } else if (i % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

//  todo ДЗ2:
//    Имеется массив с элементами: ['milk', 'beer', 'beer', 'milk', 'milk'].
//     Необходимо запустить в цикле проверку для каждого элемента массива - когда встречается элемент со значением "milk",
//     в консоль выводить строку "good", если встречается элемент со значением "beer", выводить в консоль строку "bad".
//     Выполнить дз при помощи цикла.

var array = ['milk', 'beer', 'beer', 'milk', 'milk']

// for (i = 0; i<array.length; i++){
//     if (array[i] === 'milk'){
//         console.log('good')
//         continue
//     }
//         console.log('bad')
// }

for (i=0; i<array.length; i++){
     'milk'.includes(array[i]) ? console.log('good')  : console.log('bad')
}

// for (i = 0; i<array.length; i++){
//     if('milk'.includes(array[i])){
//         console.log('good')
//         continue
//     }
//     console.log('bad')
// }


// for (i = 0; i<array.length; i++){
//     switch (array[i]){
//         case 'milk':
//             console.log('good')
//             break;
//         case 'beer':
//             console.log('bad')
//             break;
//         default:
//             console.log('error')
//     }
// }

