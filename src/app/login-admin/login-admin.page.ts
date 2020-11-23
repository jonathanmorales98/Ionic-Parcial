import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {

  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  async loginUser(form):Promise<void>{
    this.authService.loginUser(form.value.email, form.value.password).
    then(
      ()=>{
        this.router.navigateByUrl('/tabs/tab2/index-admin');
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

  goToReset(){
    this.router.navigateByUrl('recuperar-password');
  }

  goTosignUp(){
    this.router.navigateByUrl('registro');
  }

}
