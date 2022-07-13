import { Component } from "@angular/core";

@Component({
    selector: "app-home", //es el nombre de nuestra etiqueta, modulo + componente
    templateUrl: './home.component.html', //html, ABAJO CSS
    styleUrls: ['./home.component.css']

})
export class HomeComponent{

    name: string;  //mejor inicioalizar variables en el constructor
    lastName: string;
    message: string;
    isDisabled: boolean;
    shoppingList: string[];
    shoppingItem: string;

    constructor(){
        this.name = "Laura";
        this.lastName= "Tomás";
        this.message = "Enter your name";
        this.isDisabled = false; //botón habilitado
        this.shoppingList=['Milk','Bread','Eggs','Cheese'];
        this.shoppingItem=""
    }

    sayHello(){
        alert("Hello " + this.name);
    }

    printMessage(){
        alert("Detengase!!!!");
    }

    updateName(event:Event){
        this.name = (<HTMLInputElement>event.target).value;
    }
    isPepe():boolean{

        const stylesObject = {
            clave:"valor",
            clave2:'valor'
        }
        return this.name === 'Pepe';
    }
    addShoppingItem():void{
        this.shoppingList.push(this.shoppingItem);
        this.shoppingItem="";
    
    }
    addShoppingItem2(event:KeyboardEvent):void{
        if (event.key==="Enter"){
            this.shoppingList.push(this.shoppingItem);
            this.shoppingItem="";
        }
    }
    isDisabled2():boolean{
        if (this.shoppingItem===""){
            return true;
        }else{
            return false
        }
    }


}