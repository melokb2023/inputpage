import { Component, OnInit } from '@angular/core';
import {NavController,AlertController} from '@ionic/angular';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private navCtrl: NavController, private alertController:AlertController) { }

userInput1: any ='';
userInput2: any ='';
fruitInput: any ='';

checkInput(){
  const userInput1 = document.getElementById('user-input1') as HTMLIonTextareaElement;
  const userInput2 = document.getElementById('user-input2') as HTMLIonTextareaElement;
  const fruitInput = document.getElementById('fruitInput') as HTMLIonRadioElement;
  if(!userInput1.value || !userInput2.value || fruitInput.value){
    const alert = this.alertController.create({message :'Please enter an input.Thanks.',buttons:['OK'],});
    alert.then((alert) => alert.present());
}
else{
  this.GoToOutputPage()
}
}

public form = [   
    { val: 'Pok?mon Yellow' , isChecked: false},  
    { val: 'Super Metroid' , isChecked: true},  
    { val: 'Mega Man X' , isChecked: false},  
    { val: 'Spider Man' , isChecked: true}  
  ];  



GoToOutputPage(){
  const userInput1 = (document.getElementById('user-input1') as HTMLInputElement).value;
  const userInput2 = (document.getElementById('user-input2') as HTMLInputElement).value;
  const fruitInput = (document.getElementById('user-input2') as HTMLInputElement).value;
  const value1 = Number(userInput1);
  const value2 = Number(userInput2);
  const ValSum = value1 + value2;
  const ValSubtract = value1 - value2;
  const ValMultiply = value1 * value2;
  const ValDivide = value1 / value2;
  const ValModulo = value1 % value2;
  this.navCtrl.navigateForward(['/page2',{userInput1, userInput2, ValSum,ValSubtract,ValMultiply,ValDivide,ValModulo}]);
}


  
  
 
  ngOnInit() {
  }

}
