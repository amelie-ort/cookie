import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './structure/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ShopComponent } from './pages/shop/shop.component';

import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { UserComponent } from './pages/user/user.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { BasketComponent } from './pages/basket/basket.component';
import { AdminComponent } from './pages/admin/admin.component';
import { Erreur404Component } from './structure/erreur404/erreur404.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ShopComponent,
    ConnexionComponent,
    UserComponent,
    RegistrationComponent,
    BasketComponent,
    AdminComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
