import { Component, OnInit } from '@angular/core';
import { Thing } from '../favthings'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	public thing: Thing[] =[

	new Thing("sleep",1,"Allowing the body to recover and rest",60,0),
	new Thing("fising",2,"Catching fish",2,15),
	new Thing("eating out",3,"Going somewhere to eat",8,25),
	new Thing("exercise",4,"Maintain health",15,3),
	new Thing("online shopping",5,"Buying random stuff",3,100),
	];

  constructor() { }

  ngOnInit() {
  }
}
