import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordComponent } from './pages/account/reset-password/reset-password.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { PackagesPageComponent } from './pages/store/packages-page/packages-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { FavoritePageComponent } from './pages/account/favorite-page/favorite-page.component';
import { DataService } from './services/data.service';
import { DetailsPageComponent } from './pages/store/details-page/details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordComponent,
    SignupPageComponent,
    PackagesPageComponent,
    CartPageComponent,
    FramePageComponent,
    FavoritePageComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
