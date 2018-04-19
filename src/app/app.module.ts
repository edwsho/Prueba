import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {Routes, RouterModule} from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';

const appRoutes: Routes = [
{ path: '', redirectTo:'/gallery', pathMatch: 'full'},
{ path: 'gallery', component: GalleryComponent},
{ path: 'home', component:  HomeComponent},
{ path:'about', component: AboutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    HomeComponent,
    AboutComponent,
    ButtonsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
