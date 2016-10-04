import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { Xapi } from '../providers/xapi';
import { HeaderComponent } from '../components/header';
import { LoginComponent } from '../components/login';
import { RegisterComponent } from '../components/register';
import { PasswordComponent } from '../components/password';
import { ResignComponent } from '../components/resign';
import { Storage } from '@ionic/storage';
@NgModule({
    declarations: [
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        PasswordComponent,
        ResignComponent
    ],
    imports: [
        CommonModule,
        IonicModule
     ],
    providers: [
        Xapi,
        Storage
    ],
    exports: [
        CommonModule,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        PasswordComponent,
        ResignComponent
    ]
})
export class XModule { }