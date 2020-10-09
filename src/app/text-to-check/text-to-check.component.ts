import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-to-check',
  templateUrl: './text-to-check.component.html',
  styleUrls: ['./text-to-check.component.css']
})
export class TextToCheckComponent implements OnInit {


  constructor() {
    
  }

  ngOnInit(): void {
  }

  public originalText = "Jestem tekstem do sprawdzenia, czy zawieram zakazane słowo pis. Jeśli tak, to powinienem być czerwony, jeśli nie - zielony.";

   

}
