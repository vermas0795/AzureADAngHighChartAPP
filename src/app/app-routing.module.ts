import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes: Routes = [
    { path: '', component: AppComponent, pathMatch:'full', canActivate: [AuthenticationGuard]}
  ];
@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }