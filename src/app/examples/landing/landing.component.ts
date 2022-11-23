import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile/profile.service'
import { UsuarioProfile } from '../../model/UsuarioProfile';
import { EventoMusica } from 'app/model/EventoMusica';
import { EventoService } from '../eventos/eventos.service';
import { IndicesRecomendacion } from 'app/model/IndicesRecomendacion';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  usuarioProfile: UsuarioProfile;
  eventos: EventoMusica[];
  eventosRecomendados: EventoMusica[] = [];
  indices: IndicesRecomendacion = new IndicesRecomendacion();

  constructor(private profileService: ProfileService, private eventService: EventoService, private router: Router) {

  }

  ngOnInit() {
    //console.log("GAAAA" + this.usuarioProfile.nombre);
    this.eventService.listarEventosMusica()
      .subscribe(data => {
        this.eventos = data;
        //this.eventosRecomendados = [this.eventos[0], this.eventos[1], this.eventos[2], this.eventos[3], this.eventos[4], this.eventos[5]];
        this.eventosRecomendados = []
      });

    //UTILIZANDO EL EVENTEMITTER
    //this.profileService.usuarioProfileAuth.subscribe(
    //(usuarioAuth: UsuarioProfile) => {
    //console.log(usuarioAuth);
    //this.usuarioProfile = usuarioAuth;
    //console.log(this.usuarioProfile);
    //});

    let id = localStorage.getItem("usuarioProfileAuthId");
    this.profileService.obtenerUsuarioPerfil(+id)
      .subscribe(data => {
        this.usuarioProfile = data;

      })

  }

  recomendarEventos() {
    this.eventService.obtenerUsuarioRecomendaciones(this.usuarioProfile.nombreUsuario)
      .subscribe(data => {
        console.log("********OBTENIENDO RECOMENDACIONES********");
        console.log(data);

        if (data == null || data == undefined) {
          alert("Ohh! no se pudieron generar las recomendaciones de eventos");
        } else {

          this.indices = data;
          
          this.eventosRecomendados = []
          for (let i = 0; i < this.indices.indicesRecomendacion.length; i++) {
            this.eventosRecomendados = this.eventosRecomendados.concat([this.eventos[this.indices.indicesRecomendacion[i]]]);
            //console.log(this.eventos[this.indices.indicesRecomendacion[i]]);
            //this.eventosRecomendados = [this.eventos[this.indices.indicesRecomendacion[i]]]
          }

          /*
          this.eventosRecomendados = [this.eventos[this.indices.indicesRecomendacion[0]],
                                      this.eventos[this.indices.indicesRecomendacion[1]], 
                                      this.eventos[this.indices.indicesRecomendacion[2]],
                                      this.eventos[this.indices.indicesRecomendacion[3]],
                                      this.eventos[this.indices.indicesRecomendacion[4]],
                                      this.eventos[this.indices.indicesRecomendacion[5]],
                                      this.eventos[this.indices.indicesRecomendacion[6]],
                                      this.eventos[this.indices.indicesRecomendacion[7]],
                                      this.eventos[this.indices.indicesRecomendacion[8]],
                                      this.eventos[this.indices.indicesRecomendacion[9]]
                                      ];
                                      */

          alert("Recomendaciones generadas de eventos de música!!!");
        }
      })
  }

  log() {
    console.log("LOG *** EVENTOS LIST:");
    console.log(this.eventos);
    console.log("LOG *** USUARIO AUTH:");
    console.log(this.usuarioProfile);

  }

}
