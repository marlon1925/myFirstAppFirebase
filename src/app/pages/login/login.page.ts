import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:true,
  imports:[IonicModule,FormsModule,ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  credentials!:FormGroup;
  constructor(
  private fb: FormBuilder,
  private loadController: LoadingController,
  private alertController: AlertController,
  private router: Router,
  private authService: AuthService,
  private toastCtrl: ToastController,
  ) { }
public get email(){return this.credentials.get('email')}
public get password(){return this.credentials.get('password')}

  ngOnInit() {
    this.credentials=this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.min(6)]]
    });
  }

}

