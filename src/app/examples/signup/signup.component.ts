import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile/profile.service'
import { UsuarioProfile } from '../../model/UsuarioProfile';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    usuarioProfileForm: UsuarioProfile = new UsuarioProfile();
    usuarioProfileAuth: UsuarioProfile = new UsuarioProfile();

    test: Date = new Date();
    focus;
    focus1;
    focus2;
    focus3;
    focus4;
    focus5;
    constructor(private router: Router, private service: ProfileService) { }

    ngOnInit() { }

    autenticarUsuario() {

        //console.log(this.usuarioProfileForm);

        this.service.autenticarUsuarioPerfil(this.usuarioProfileForm)
            .subscribe(data => {
                console.log("********Auth********")
                console.log(data)

                if (data == null || data == undefined) {
                    alert("No se ha podido iniciar sesión!!! Nick/Email y/o Password incorrectos");
                } else {
                    this.usuarioProfileAuth = data;
                    this.service.usuarioProfileAuth.emit(this.usuarioProfileAuth);   //No funka
                    localStorage.setItem("usuarioProfileAuthId", this.usuarioProfileAuth.id.toString()); //Si funka
                    alert(this.usuarioProfileAuth.nombre + ", Bienvenido a SREM!!!");

                    if (this.usuarioProfileAuth.descripcionUsuario
                        || this.usuarioProfileAuth.eventosInteres
                        || this.usuarioProfileAuth.artistasInteres
                        || this.usuarioProfileAuth.generosMusicalesInteres) {
                        this.router.navigate(["landing"]);
                    } else {
                        this.router.navigate(["profile-new"]);
                    }
                }
            })
    }
}
