mes = "Добро пожаловать в калькулятор чисел! Введите два числа."
alert (mes)

let operation;
let number1;
let number2;
let result;
function inputNumber(){
number = parseFloat(prompt("Введите число"));
while(isNaN(number)){
    alert("ОШИБКА! Повторите ввод");
  number = parseFloat(prompt("Введите число, 0 - Выход"))}
{
return(number)
}
}
number1 = inputNumber();
number2 = inputNumber();

function inputOperation(){
operation = prompt('Какую операцию вы хотите совершить с числами? (умножение, деление, сложение, вычитание)').toLowerCase();
    while(operation != 'умножение' && operation != 'деление' && operation != 'сложение' && operation != 'вычитание'){
        alert('Ошибка. Проверьте правильность написания и повторите ввод, используйте русские буквы.');
        operation = prompt('Какую операцию вы хотите совершить с числами? (умножение, деление, сложение, вычитание)').toLowerCase();
    
    }
{
return(operation)
}
}
operation = inputOperation();   
alert(operation)


if(operation == 'умножение'){
    result = number1 * number2
    alert(result);
}
else if(operation == 'деление'){
    result = number1 / number2
    alert(result)
}
else if(operation == 'сложение'){
    result = number1 + number2
    alert(result)
}
else if(operation == 'вычитание'){
    result = number1 - number2
    alert(result)
}

//alert(number1, number2)