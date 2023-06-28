class calculatorView
{
	constructor()
	{
		this.container = document.createElement('div');

		this.display = document.createElement('input');
		this.display.type = 'text';
		this.display.setAttribute('disabled','');
		this.display.value = '';
		this.display.classList.add('displayResult');

		this.button0 = document.createElement('button');
		this.button0.innerText = '0';
		this.button0.classList.add('btnNumber');

		this.button1 = document.createElement('button');
		this.button1.innerText = '1';
		this.button1.classList.add('btnNumber');

		this.button2 = document.createElement('button');
		this.button2.innerText = '2';
		this.button2.classList.add('btnNumber');

		this.button3 = document.createElement('button');
		this.button3.innerText = '3';
		this.button3.classList.add('btnNumber');

		this.button4 = document.createElement('button');
		this.button4.innerText = '4';
		this.button4.classList.add('btnNumber');

		this.button5 = document.createElement('button');
		this.button5.innerText = '5';
		this.button5.classList.add('btnNumber');

		this.button6 = document.createElement('button');
		this.button6.innerText = '6';
		this.button6.classList.add('btnNumber');

		this.button7 = document.createElement('button');
		this.button7.innerText = '7';
		this.button7.classList.add('btnNumber');

		this.button8 = document.createElement('button');
		this.button8.innerText = '8';
		this.button8.classList.add('btnNumber');

		this.button9 = document.createElement('button');
		this.button9.innerText = '9';
		this.button9.classList.add('btnNumber');
		
		this.buttonSum = document.createElement('button');
		this.buttonSum.innerText = '+';
		this.buttonSum.classList.add('btnOperator');

		this.buttonSubtract = document.createElement('button');
		this.buttonSubtract.innerText = '-';
		this.buttonSubtract.classList.add('btnOperator');

		this.buttonMultiply = document.createElement('button');
		this.buttonMultiply.innerText = '*';
		this.buttonMultiply.classList.add('btnOperator');

		this.buttonDivision = document.createElement('button');
		this.buttonDivision.innerText = '/';
		this.buttonDivision.classList.add('btnOperator');

		this.buttonPoint = document.createElement('button');
		this.buttonPoint.innerText = '.';
		this.buttonPoint.classList.add('btnOperator');

		this.buttonDelete = document.createElement('button');
		this.buttonDelete.innerText = 'Borrar';
		this.buttonDelete.classList.add('btnDelete');

		this.buttonCalculate = document.createElement('button');
		this.buttonCalculate.innerText = '=';
		this.buttonCalculate.classList.add('btnResult');

		this.row1 = document.createElement('div');
		this.row1.appendChild(this.display);

		this.row2 = document.createElement('div');
		this.row2.appendChild(this.button7);
		this.row2.appendChild(this.button8);
		this.row2.appendChild(this.button9);
		this.row2.appendChild(this.buttonSum);

		this.row3 = document.createElement('div');
		this.row3.appendChild(this.button4);
		this.row3.appendChild(this.button5);
		this.row3.appendChild(this.button6);
		this.row3.appendChild(this.buttonSubtract);
	
		this.row4 = document.createElement('div'); 
		this.row4.appendChild(this.button1);
		this.row4.appendChild(this.button2);
		this.row4.appendChild(this.button3);
		this.row4.appendChild(this.buttonMultiply);

		this.row5 = document.createElement('div'); 
		this.row5.appendChild(this.button0);
		this.row5.appendChild(this.buttonPoint);
		this.row5.appendChild(this.buttonCalculate);
		this.row5.appendChild(this.buttonDivision);

		this.row6 = document.createElement('div'); 
		this.row6.appendChild(this.buttonDelete);

		this.container.appendChild(this.row1);
		this.container.appendChild(this.row2);
		this.container.appendChild(this.row3);
		this.container.appendChild(this.row4);
		this.container.appendChild(this.row5);
		this.container.appendChild(this.row6);
	}
}

export { calculatorView };