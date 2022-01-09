import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupModule } from './modules/pages/signup/signup.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, SignupModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
