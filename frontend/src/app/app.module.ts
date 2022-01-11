import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from './modules/pages/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { NotFoundHomeComponent } from './modules/pages/notFound/not-found-home/not-found-home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundHomeComponent],
  imports: [BrowserModule, AuthModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
