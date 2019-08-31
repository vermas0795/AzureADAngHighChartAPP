import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EnvServiceProvider } from 'src/services/env.service.provider';
import { Adal6HTTPService, Adal6Service } from 'adal-angular6';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MsAdalAngular6Module, MsAdalAngular6Service, AuthenticationGuard
} from 'microsoft-adal-angular6';
import { EnvService } from 'src/services/env.service';
import { ValService } from 'src/services/val.service';

let adalConfig: any; // will be initialized by APP_INITIALIZER
export function msAdalAngular6ConfigFactory() {
return adalConfig; // will be invoked later when creating MsAdalAngular6Service
}
// refer to:
// https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
// for a description of the AppConfig service
export function initializeApp(env: EnvService) {
    return () => adalConfig = env.adalConfig;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsAdalAngular6Module,
    HttpClientModule
  ],
  providers: [ AuthenticationGuard, EnvServiceProvider, ValService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [EnvService],
      multi: true
    },
    MsAdalAngular6Service,
    {
      provide: 'adalConfig',
      useFactory: msAdalAngular6ConfigFactory,
      deps: []
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
