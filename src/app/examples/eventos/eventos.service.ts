import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventoMusica } from '../../model/EventoMusica';
import { IndicesRecomendacion } from 'app/model/IndicesRecomendacion';

@Injectable()
export class EventoService implements OnInit {

    eventosList: EventoMusica[];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
       
    }

    Url = 'http://localhost:8087/srem/evento';
    urlRecomendacion = 'http://localhost:5000';
    //http://127.0.0.1:5000/obtenerRecomendacion/US001
    listarEventosMusica() {
        return this.http.get<EventoMusica[]>(this.Url);
    }

    obtenerEventoMusicaPorId(id: number) {
        return this.http.get<EventoMusica>(this.Url + "/" + id);
    }

    obtenerUsuarioPerfil(nombreEvento: String) {
        return this.http.get<EventoMusica>(this.Url + "/nombreevento/" + nombreEvento);
    }

    obtenerUsuarioRecomendaciones(usuario: String) {
        return this.http.get<IndicesRecomendacion>(this.urlRecomendacion + "/obtenerRecomendacion/" + usuario);
    }

}
