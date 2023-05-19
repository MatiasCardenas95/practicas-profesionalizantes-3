
let display = document.createElement("input");

display.classList.add('btnDisplay');

//Botones Numeros

let btn0= document.createElement('button');
let btn1= document.createElement('button');
let btn2= document.createElement('button');
let btn3= document.createElement('button');
let btn4= document.createElement('button');
let btn5= document.createElement('button');
let btn6= document.createElement('button');
let btn7= document.createElement('button');
let btn8= document.createElement('button');
let btn9= document.createElement('button');

btn0.classList.add('btnNumber');
btn1.classList.add('btnNumber');
btn2.classList.add('btnNumber');
btn3.classList.add('btnNumber');
btn4.classList.add('btnNumber');
btn5.classList.add('btnNumber');
btn6.classList.add('btnNumber');
btn7.classList.add('btnNumber');
btn8.classList.add('btnNumber');
btn9.classList.add('btnNumber');

// Botones Operadores

let btnPoint= document.createElement('button');
let btnSum= document.createElement('button');
let btnSubtract = document.createElement('button');
let btnMultiply= document.createElement('button');
let btnDivision= document.createElement('button');
let btnEqual= document.createElement('button');
let btnDelete= document.createElement('button');

btnPoint.classList.add('btnOperator');
btnSum.classList.add('btnOperator');
btnSubtract.classList.add('btnOperator');
btnMultiply.classList.add('btnOperator');
btnDivision.classList.add('btnOperator');

btnEqual.classList.add('btnResult');

btnDelete.classList.add('btnDelete');

//Filas

let row1 = document.createElement('div');
let row2 = document.createElement('div');
let row3 = document.createElement('div');
let row4 = document.createElement('div');
let row5 = document.createElement('div');

row1.classList.add('row');
row2.classList.add('row');
row3.classList.add('row');
row4.classList.add('row');
row5.classList.add('row');

//Eventos Botones numeros

btn0.addEventListener('click', onBtn0ButtonClick);
btn1.addEventListener('click', onBtn1ButtonClick);
btn2.addEventListener('click', onBtn2ButtonClick);
btn3.addEventListener('click', onBtn3ButtonClick);
btn4.addEventListener('click', onBtn4ButtonClick);
btn5.addEventListener('click', onBtn5ButtonClick);
btn6.addEventListener('click', onBtn6ButtonClick);
btn7.addEventListener('click', onBtn7ButtonClick);
btn8.addEventListener('click', onBtn8ButtonClick);
btn9.addEventListener('click', onBtn9ButtonClick);

//Eventos Botones operadores

btnPoint.addEventListener('click', onBtnPointButtonClick);
btnSum.addEventListener('click', onBtnSumButtonClick);
btnSubtract.addEventListener('click', onBtnSubtractButtonClick);
btnMultiply.addEventListener('click', onBtnMultiplyButtonClick);
btnDivision.addEventListener('click', onBtnDivisionButtonClick);
btnEqual.addEventListener('click', onBtnEqualButtonClick);
btnDelete.addEventListener('click', onBtnDeleteButtonClick);

//Function

function onBtn1ButtonClick()
{
    display.value += '1';
}

function onBtn2ButtonClick()
{
    display.value += '2';
}

function onBtn3ButtonClick()
{
    display.value += '3';
}

function onBtn4ButtonClick()
{
    display.value += '4';
}

function onBtn5ButtonClick()
{
    display.value += '5';
}

function onBtn6ButtonClick()
{
    display.value += '6';
}

function onBtn7ButtonClick()
{
    display.value += '7';
}

function onBtn8ButtonClick()
{
    display.value += '8';
}

function onBtn9ButtonClick()
{
    display.value += '9';
}

function onBtn0ButtonClick()
{
    display.value += '0';
}

function onBtnPointButtonClick()
{
    display.value += '.';
}

function onBtnSumButtonClick()
{
    display.value += '+';
}

function onBtnSubtractButtonClick()
{
    display.value += '-';
}

function onBtnDivisionButtonClick()
{
    display.value += '/';
}

function onBtnMultiplyButtonClick()
{
    display.value += '*';
}

function onBtnEqualButtonClick()
{
    try 
    {
        let result = eval(display.value);

        display.value = result;
    }

    catch (error) 
    {
        alert("Error encontrado: "+ error);
    }
}

function onBtnDeleteButtonClick()
{
    display.value = "";
}

function startAplication()
{
    display.readOnly = true;
    display.type = "text";
    display.value = "";

    document.body.appendChild(display);
    
    btn0.innerText = '0';
    btn1.innerText = '1';
    btn2.innerText = '2';
    btn3.innerText = '3';
    btn4.innerText = '4';
    btn5.innerText = '5';
    btn6.innerText = '6';
    btn7.innerText = '7';
    btn8.innerText = '8';
    btn9.innerText = '9';

    btnPoint.innerText = '.';
    btnSum.innerText = '+';
    btnSubtract.innerText = '-';
    btnDivision.innerText = '/';
    btnMultiply.innerText = '*';
    btnEqual.innerText = '=';
    btnDelete.innerText = 'Borrar';

    row1.appendChild(btn7);
    row1.appendChild(btn8);
    row1.appendChild(btn9);
    row1.appendChild(btnSum);
   
    row2.appendChild(btn4);
    row2.appendChild(btn5);
    row2.appendChild(btn6);
    row2.appendChild(btnSubtract);

    row3.appendChild(btn1);
    row3.appendChild(btn2);
    row3.appendChild(btn3);
    row3.appendChild(btnMultiply);

    row4.appendChild(btn0);
    row4.appendChild(btnPoint);
    row4.appendChild(btnEqual);
    row4.appendChild(btnDivision);

    row5.appendChild(btnDelete);

    document.body.appendChild(row1);
    document.body.appendChild(row2);
    document.body.appendChild(row3);
    document.body.appendChild(row4);
    document.body.appendChild(row5);

}

window.addEventListener('load', startAplication);