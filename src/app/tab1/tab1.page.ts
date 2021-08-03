import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public nomeTab = 'Filmes favoritos';
  public buscarTexto: string;

  public listaDeFilmes = [
    {
      imagem : 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg',
      nome: 'Soul: Uma Aventura com Alma (2020)',
      lancamento: '25/12/2020',
      duracao: '1h 40m',
      generos: ['Animação', 'Comédia', 'Família', 'Aventura'],
      avaliacao: '83%'
    },
    {
      imagem : 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Am1ipOQiOMrH55tCCT2ObNiF1rW.jpg',
      nome: 'Monster Hunter (2020)',
      lancamento: '25/02/2021',
      duracao: '1h 43m',
      generos: ['Ação', 'Fantasia', 'Aventura','Ação', 'Fantasia', 'Aventura'],
      avaliacao: '70%'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Qual a nota?',
      inputs: [
        {
          name: 'checkbox1',
          type: 'radio',
          label: '1',
          value: 'value1',
          handler: () => {
            console.log('Checkbox 1 selected');
          },
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'radio',
          label: '2',
          value: 'value2',
          handler: () => {
            console.log('Checkbox 2 selected');
          }
        },

        {
          name: 'checkbox3',
          type: 'radio',
          label: '3',
          value: 'value3',
          handler: () => {
            console.log('Checkbox 3 selected');
          }
        },

        {
          name: 'checkbox4',
          type: 'radio',
          label: '4',
          value: 'value4',
          handler: () => {
            console.log('Checkbox 4 selected');
          }
        },

        {
          name: 'checkbox5',
          type: 'radio',
          label: '5',
          value: 'value5',
          handler: () => {
            console.log('Checkbox 5 selected');
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async Curtir() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Você tem certeza?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
  const toast = await this.toastController.create({
    message: 'Curtir atribuído',
    duration: 2000
  });
  toast.present();
}

  buscar(element: any): void{
    const textBusca = element.detail.value;
    console.log(textBusca);
  }
}
