import { Component, OnInit } from '@angular/core';
import { Thing } from '../favthings'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})



export class FormComponent implements OnInit {

	clickme():any {

		console.log("the submit button has been clicked");
		let orderValf = (<HTMLInputElement>document.getElementById('orderCtrlf')).value
		let nameValf = (<HTMLInputElement>document.getElementById('nameCtrlf')).value
		let descValf = (<HTMLInputElement>document.getElementById('descCtrlf')).value
		let freqValf = (<HTMLInputElement>document.getElementById('freqCtrlf')).value
		let spendValf = (<HTMLInputElement>document.getElementById('spendCtrlf')).value
	console.log(orderValf)
	console.log(nameValf)
	console.log(descValf)
	console.log(freqValf)
	console.log(spendValf)


		let thing: Thing[] =[
		new Thing(nameValf,Number(orderValf),descValf,Number(freqValf),Number(spendValf)),
		]

	console.log(thing);

	

	// theThings.push(thing)

	}








  constructor() { }

  ngOnInit() {
  }

}

