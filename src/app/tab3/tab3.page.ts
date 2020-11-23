import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  paneEnabled = true;
  constructor(private menuController: MenuController,private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) {}

    async logOut():Promise<void>{
      this.authService.logOutUser().
      then(
        ()=>{
          this.router.navigateByUrl('/tabs/tab1/home');
        },
        async error =>{
          const alert = await this.alertCtrl.create({
            message:error.message,
            buttons:[{text:'ok',role:'cancel'}],
          });
          await alert.present();
        }
      );
    }
  
  ionViewWillEnter(){
    this.paneEnabled=true;
    this.menuController.enable(true,'third');
  }
  ionViewWillLeave(){
    this.paneEnabled=false;
  }

}
