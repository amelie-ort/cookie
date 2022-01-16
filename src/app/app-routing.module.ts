import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BasketComponent } from './pages/basket/basket.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AdminGuard } from './utils/securite/admin.guard';
import { AuthGuard } from './utils/securite/auth.guard';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'shop', component:ShopComponent}, 
  {path:'connexion', component:ConnexionComponent}, 
  {path:'registration', component:RegistrationComponent},
  {path:'panier', component:BasketComponent, 
  canActivate:[AuthGuard]}, 
  {path:'admin', component:AdminComponent, 
  canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
