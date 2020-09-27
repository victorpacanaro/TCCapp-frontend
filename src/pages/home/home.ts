import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  } // o objeto navCtrl do tipo NavController está injetado na classe HomePage

    login() {
      this.navCtrl.push('CategoriasPage');
    } // método login apontando para a página de categorias
}
