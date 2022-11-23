import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { ConfigComponent } from './config/config.component';
import { EventosComponent } from './eventos/eventos.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { ProfileNewComponent } from './profile-new/profile-new.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        RegisterComponent,
        ConfigComponent,
        EventosComponent,
        ArtistasComponent,
        ProfileNewComponent
    ]
})
export class ExamplesModule { }
