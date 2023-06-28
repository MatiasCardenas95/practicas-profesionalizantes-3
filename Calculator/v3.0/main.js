import { calculatorView } from './calculator/view.js';
import { calculatorController } from './calculator/controller.js';
import { calculatorModel, calculatorBackendModel } from './calculator/model.js';

class calculator
{
	constructor( model )
	{
		this.innerView = new calculatorView();
		this.innerModel = model;
		this.innerController = new calculatorController(this.innerView, this.innerModel);

	}
}

function main()
{
	alert('Starting application...');

	let calculatorModelFrontend = new calculatorModel();
	let calculatorModelBackend = new calculatorBackendModel();
	
	let calculatorInstance = new calculator(calculatorModelBackend);

	document.body.appendChild(calculatorInstance.innerView.container);



}

window.onload = main;