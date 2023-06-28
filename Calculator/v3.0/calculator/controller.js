class calculatorController
{
	constructor( viewReference, modelReference )
	{
		this.viewReference = viewReference;
		this.modelReference = modelReference;

		this.viewReference.button0.onclick = () => this.onbutton0click();
		this.viewReference.button1.onclick = () => this.onbutton1click();
		this.viewReference.button2.onclick = () => this.onbutton2click();
		this.viewReference.button3.onclick = () => this.onbutton3click();
		this.viewReference.button4.onclick = () => this.onbutton4click();
		this.viewReference.button5.onclick = () => this.onbutton5click();
		this.viewReference.button6.onclick = () => this.onbutton6click();
		this.viewReference.button7.onclick = () => this.onbutton7click();
		this.viewReference.button8.onclick = () => this.onbutton8click();
		this.viewReference.button9.onclick = () => this.onbutton9click();
		this.viewReference.buttonSum.onclick = () => this.onbuttonsumclick();
		this.viewReference.buttonDelete.onclick = () => this.onbuttondeleteclick();
		this.viewReference.buttonSubtract.onclick = () => this.onbuttonsubtractclick();
		this.viewReference.buttonMultiply.onclick = () => this.onbuttonmultiplyclick();
		this.viewReference.buttonDivision.onclick = () => this.onbuttondivisionclick();
		this.viewReference.buttonPoint.onclick = () => this.onbuttonpointclick();
		this.viewReference.buttonDelete.onclick = () => this.onbuttondeleteclick();
		this.viewReference.buttonCalculate.onclick = () => this.onbuttoncalculateclick();
	}

	onbutton0click()
	{
		this.viewReference.display.value += '0';
	}

	onbutton1click()
	{
		this.viewReference.display.value += '1';
	}

	onbutton2click()
	{
		this.viewReference.display.value += '2';
	}

	onbutton3click()
	{
		this.viewReference.display.value += '3';
	}

	onbutton4click()
	{
		this.viewReference.display.value += '4';
	}

	onbutton5click()
	{
		this.viewReference.display.value += '5';
	}

	onbutton6click()
	{
		this.viewReference.display.value += '6';
	}

	onbutton7click()
	{
		this.viewReference.display.value += '7';
	}

	onbutton8click()
	{
		this.viewReference.display.value += '8';
	}

	onbutton9click()
	{
		this.viewReference.display.value += '9';
	}

	onbuttonsumclick()
	{
		this.viewReference.display.value += '+';
	}

	onbuttonsubtractclick()
	{
		this.viewReference.display.value += '-';
	}

	onbuttonmultiplyclick()
	{
		this.viewReference.display.value += '*';
	}

	onbuttondivisionclick()
	{
		this.viewReference.display.value += '/';
	}

	onbuttonpointclick()
	{
		this.viewReference.display.value += '.';
	}

	onbuttondeleteclick()
	{
		this.viewReference.display.value = '';
	}

	async onbuttoncalculateclick()
	{
		this.modelReference.calculateExpression(this.viewReference.display.value).then( response => 
		{
			this.viewReference.display.value = response.message;
		});
		
	}
}

export { calculatorController };