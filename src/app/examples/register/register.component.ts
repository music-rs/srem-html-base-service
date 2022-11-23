import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile/profile.service'
import { UsuarioProfile } from '../../model/UsuarioProfile';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuarioProfile: UsuarioProfile = new UsuarioProfile();

  test: Date = new Date();
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  constructor(private router: Router, private usuarioService: ProfileService) { }

  ngOnInit() { }

  registrarUsuario() {

    this.usuarioProfile.tipo = "US";
    console.log(this.usuarioProfile);

    this.usuarioService.agregarUsuarioPerfil(this.usuarioProfile)
      .subscribe(data => {
        alert("Se ha registrado al usuario con Exito...!!!");

        this.usuarioService.ingresarInteresesUsuarioNuevo(this.usuarioProfile.nombreUsuario)
          .subscribe(data2 => {
             console.log("Se generaron los intereses del usuario")
             console.log(data2);
          })
        this.router.navigate(["signup"]);
      })
  }
}
