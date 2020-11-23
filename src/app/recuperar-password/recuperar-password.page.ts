import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }


  ngOnInit() {
  }

  async resetPassword(form):Promise<void>{
    this.authService.resetPassword(form.value.email).
    then(
      async()=>{
        const alert = await this.alertCtrl.create({
          message:'check your email to reset password',
          buttons:[{text:'ok',role:'cancel',handler:()=>{
            this.router.navigateByUrl('login');
          },},],
        });
        await alert.present();
      },
      async error =>{
        const errorAlert = await this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok',role:'cancel'}],
        });
        await errorAlert.present();
      }
    );
  }


}
