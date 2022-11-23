import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service'
import { UsuarioProfile } from '../../model/UsuarioProfile';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    usuarioProfileList: UsuarioProfile[];

    constructor(private service: ProfileService, private router: Router) { }

    ngOnInit() {
        this.service.listarUsuarioPerfil()
            .subscribe(data => {
                this.usuarioProfileList = data;
            });
    }

}
