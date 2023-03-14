import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) { }
  
  userInput1: any = 'userInput1';
  userInput2: any = 'userInput2';
  ValSum: any = 'ValSum';
  ValSubtract: any = 'ValSubtract';
  ValMultiply: any = 'ValMultiply';
  ValDivide: any = 'ValDivide';
  ValModulo: any = 'ValModulo';
  ValFruits: any = 'ValFruits';

  GoToInputPage(){
    this.navCtrl.navigateBack(['/page1']);
    this.clearTextArea();
  }
  clearTextArea(){
    const textarea1 = document.querySelector('#user-input1') as HTMLIonTextareaElement;
    textarea1.value = '';
    const textarea2 = document.querySelector('#user-input2') as HTMLIonTextareaElement;
    textarea2.value = '';
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.userInput1 = params['userInput1'];
      this.userInput2 = params['userInput2'];
      this.ValSum = params['ValSum'];
      this.ValSubtract = params['ValSubtract'];
      this.ValMultiply = params['ValMultiply'];
      this.ValDivide = params['ValDivide'];
      this.ValModulo = params['ValModulo'];
    })
  }
 
 
}
