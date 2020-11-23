import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController, LoadingController,AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.page.html',
  styleUrls: ['./registrar-estudiante.page.scss'],
})
export class RegistrarEstudiantePage implements OnInit {

  imgURL;

  public nombre: string;
  public email: string;
  public password: string;
  
  constructor(
    private camera: Camera,
    private authService:AuthService,
    private router:Router,
    private alertCtrl:AlertController,
    private toastCtrl: ToastController,
  ) { }

  getCamera(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then( (res)=>{
      this.imgURL = res;
    }).catch(e=>{
      console.log(e);
    })
  }

  getGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then( (res)=>{
      this.imgURL = 'data:image/jpeg;base64,' + res;
    }).catch(e=>{
      console.log(e);
    })
  }

  async signUp(form):Promise<void>{
    this.authService.signUpUser(form.value.nombre,form.value.email, form.value.password).
    then(
      ()=>{
        this.router.navigateByUrl('/tabs/tab2/index-admin');
        this.presentToast('Usuario registrado');
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

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message: a,
       duration: 1500,
       position: 'top'
    });
    toast.present();
  }

  ngOnInit() {
  }

}

