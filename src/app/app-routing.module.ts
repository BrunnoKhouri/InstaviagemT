import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './pages/master/frame.page';
import { PackagesPageComponent } from './pages/store/packages-page/packages-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { FavoritePageComponent } from './pages/account/favorite-page/favorite-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordComponent } from './pages/account/reset-password/reset-password.component';
import { DetailsPageComponent } from './pages/store/details-page/details-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: PackagesPageComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'datails/:_id', component: DetailsPageComponent}
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path:'favorites', component: FavoritePageComponent}
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
