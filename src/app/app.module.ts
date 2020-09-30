import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import {
  MatListModule
} from '@angular/material/list';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatGridListModule
} from '@angular/material/grid-list';
import {
  MatDialogModule
} from '@angular/material/dialog';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatCheckboxModule
} from '@angular/material/checkbox';
import {
  FormsModule
} from '@angular/forms';



import 'hammerjs';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  MenuComponent
} from './menu/menu.component';
import {
  DishDetailComponent
} from './dish-detail/dish-detail.component';
import {
  HearderComponent
} from './hearder/hearder.component';
import {
  FooterComponent
} from './footer/footer.component';
import {
  AboutComponent
} from './about/about.component';
import {
  HomeComponent
} from './home/home.component';
import {
  ContactComponent
} from './contact/contact.component';
import {
  LoginComponent
} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailComponent,
    HearderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
