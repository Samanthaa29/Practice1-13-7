import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {

  isDisabled: boolean;
  text:string;
  size:number;
 

  constructor() {
    this.isDisabled = false; //botón habilitado
    this.text ="";
    this.size=20;
   }

  increaseSize():void{
    this.size=this.size+1;

  }
  decreaseSize():void{
    this.size=this.size-1;
    
  }



}
