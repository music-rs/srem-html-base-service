import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { RegisterComponent } from './examples/register/register.component';
import { ConfigComponent } from './examples/config/config.component';
import { EventosComponent } from './examples/eventos/eventos.component';
import { ArtistasComponent } from './examples/artistas/artistas.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ProfileNewComponent } from './examples/profile-new/profile-new.component';

const routes: Routes =[
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup',           component: SignupComponent },
    { path: 'register',           component: RegisterComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'profile-new',          component: ProfileNewComponent },
    { path: 'eventos',          component: EventosComponent },
    { path: 'artistas',          component: ArtistasComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'user-config',     component: ConfigComponent },
    { path: 'home',             component: ComponentsComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
