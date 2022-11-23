import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioProfile } from '../../model/UsuarioProfile';
import { InteresesUsuario } from 'app/model/InteresesUsuario';

@Injectable()
export class InteresesUsuarioService {   

    usuarioProfileAuth = new EventEmitter<UsuarioProfile>()

    constructor(private http: HttpClient) { }

    url = 'http://localhost:8087/srem/interesUsuario';
    urlRecomendacion = 'http://localhost:5000';

    listarInteresesUsuario() {
        return this.http.get<InteresesUsuario[]>(this.url);
    }

    agregarInteresesUsuario(interesesUsuario: InteresesUsuario) {
        return this.http.post<InteresesUsuario>(this.url, interesesUsuario);
    }

    obtenerInteresesUsuario(id:number) {
        return this.http.get<InteresesUsuario>(this.url+"/obtenerInteres?id="+id);
    }

    obtenerInteresesUsuarioPorNombreUsuario(nombreUsuario:String) {
        return this.http.get<InteresesUsuario>(this.url+"/obtenerInteres/nombreUsuario?nombreUsuario="+nombreUsuario);
    }

    obtenerInteresesUsuarioPorNombreUsuarioAndNombreEvento(nombreUsuario:String,nombreEvento:String) {
        return this.http.get<InteresesUsuario>(this.url+"/obtenerInteres/nombreUsuarioEvento?nombreUsuario="+nombreUsuario+"&nombreEvento="+nombreEvento);
    }

    obtenerInteresesUsuarioPorIdUsuario(idUsuario:String) {
        return this.http.get<InteresesUsuario>(this.url+"/obtenerInteres/idUsuario?idUsuario="+idUsuario);
    }

    obtenerInteresesUsuarioPorIdUsuarioAndIdEvento(idUsuario:String,idEvento:String) {
        return this.http.get<InteresesUsuario>(this.url+"/obtenerInteres/idUsuarioEvento?idUsuario="+idUsuario+"&idEvento="+idEvento);
    }

    modificarInteresesUsuario(interesesUsuario: InteresesUsuario) {
        return this.http.put<InteresesUsuario>(this.url + "/" + interesesUsuario.id, interesesUsuario);
    }

}
