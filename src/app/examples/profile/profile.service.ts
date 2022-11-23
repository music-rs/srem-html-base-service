import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioProfile } from '../../model/UsuarioProfile';

@Injectable()
export class ProfileService {   

    usuarioProfileAuth = new EventEmitter<UsuarioProfile>()

    constructor(private http: HttpClient) { }

    url = 'http://localhost:8087/srem/usuario';
    urlRecomendacion = 'http://localhost:5000';

    listarUsuarioPerfil() {
        return this.http.get<UsuarioProfile[]>(this.url);
    }
    agregarUsuarioPerfil(usuarioProfile: UsuarioProfile) {
        return this.http.post<UsuarioProfile>(this.url, usuarioProfile);
    }

    obtenerUsuarioPerfil(id:number) {
        return this.http.get<UsuarioProfile>(this.url+"/"+id);
    }

    autenticarUsuarioPerfil(usuarioProfile: UsuarioProfile) {
        return this.http.post<UsuarioProfile>(this.url + "/auth" , usuarioProfile);
    }

    modificarUsuarioPerfil(usuarioProfile: UsuarioProfile) {
        return this.http.put<UsuarioProfile>(this.url + "/" + usuarioProfile.id, usuarioProfile);
    }
    eliminarUsuarioPerfil(usuarioProfile: UsuarioProfile) {
        return this.http.delete<UsuarioProfile>(this.url + "/" + usuarioProfile.id);
    }

    ingresarInteresesUsuarioNuevo(nick: String) {
        return this.http.get<UsuarioProfile>(this.urlRecomendacion + "/intereses-nuevo-usuario/" + nick);
    }
}
