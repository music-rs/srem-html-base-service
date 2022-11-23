import { Component, OnInit } from '@angular/core';
import { UsuarioProfile } from 'app/model/UsuarioProfile';
import { ProfileService } from '../profile/profile.service';
import { Router } from '@angular/router';
import { EventoMusica } from 'app/model/EventoMusica';
import { EventoService } from '../eventos/eventos.service';
import { Artistas } from 'app/model/Artistas';
import { InteresesUsuarioService } from '../profile/intereses-usuarios.service';
import { InteresesUsuario } from 'app/model/InteresesUsuario';

@Component({
  selector: 'app-profile-new',
  templateUrl: './profile-new.component.html',
  styleUrls: ['./profile-new.component.scss']
})
export class ProfileNewComponent implements OnInit {

  usuarioProfile: UsuarioProfile = new UsuarioProfile;
  eventos: EventoMusica[];
  eventosList: EventoMusica[] = [];
  eventosCheckbox: Boolean[] = [];
  eventosSeleccionadosCheckbox: EventoMusica[] = [];
  artistasList: String[] = [];
  artistasCheckbox: Boolean[] = [];
  artistaSeleccionadosCheckbox: String[] = [];
  generosList: String[] = [];
  generosCheckbox: Boolean[] = [];
  generosSeleccionadosCheckbox: String[] = [];
  contEventos: number;
  limiteEventos: number;
  contArtistas: number;
  limiteArtistas: number;
  interesesObtenido: InteresesUsuario;

  constructor(private profileService: ProfileService, private eventService: EventoService, private interesesUsuariosService: InteresesUsuarioService, private router: Router) {

  }

  ngOnInit() {

    this.limiteEventos = 100;
    this.limiteArtistas = 100;

    let id = localStorage.getItem("usuarioProfileAuthId");
    this.profileService.obtenerUsuarioPerfil(+id)
      .subscribe(data => {
        this.usuarioProfile = data;

      })

    //EVENTOS DE INTERES
    this.eventService.listarEventosMusica()
      .subscribe(data => {
        this.eventos = data;
        //this.eventosList = [this.eventos[0], this.eventos[1], this.eventos[2], this.eventos[3], this.eventos[4], this.eventos[5]];

        this.contEventos = 0;
        this.eventos.forEach(element => {
          if (this.contEventos < this.limiteEventos) {
            //Eventos mostrados
            this.eventosList.push(element);
            //Eventos Checkbox los iniciamos en false
            this.eventosCheckbox.push(false);
          }
          this.contEventos = this.contEventos + 1;
        });

      });

    //ARTISTAS DE INTERES
    this.artistasList = ['2 Minutos', '40 Gramos', '6 voltios', 'A Day To Remember', 'AC/DC', 'ACHKIRIK', 'Adammo', 'Adolescentes', 'Aeropajitas', 'Aerosmith', 'Agua Marina', 'Alan Walker', 'Alejandro y Maria Laura', 'Alex Mateos', 'Alexis y Fido', 'Alma Bella', 'Almirante Ackbar', 'Amén', 'Anahí', 'Andrés Calamaro', 'Andy Montañez', 'Angeles', 'Animal', 'Anthrax', 'Anuel AA', 'Arcade Fire', 'Arctic Monkeys', 'Arena Hash', 'Armonía 10', 'Asking Alexandria', 'Astronaut Project', 'Audioslave', 'Autubus', 'Avenged Sevenfold', 'Avril Lavigne', 'Axe Bahia', 'Bad Bunny', 'Banana Child', 'Bang4', 'Bareto', 'Barrio Calavera', 'Bartola', 'Beto Cuevas', 'Big Pollo', 'Billie Eilish', 'Black Sabbath', 'Blur', 'Bocanegra', 'Bon Jovi', 'Bring Me The Horizon', 'Bullet For My Valentine', 'Café Tacvba', 'Cage the Elephant', 'Caifanes', 'Caloncho', 'Camagüey', 'Camila Cabello', 'Camilo', 'Camilo Vega', 'Campo de Almas', 'Canserbero', 'Carajo', 'Cardenales', 'Carlos Compson', 'Cartel de Santa', 'Cecimonster vs. Donka', 'Celia Cruz', 'Cementerio Club', 'Cementerio Inocentes', 'Chabelos', 'Chabuca Granda', 'Christian Meier', 'Clara Yolks', 'Coldplay', 'Creedence Clearwater Revival', 'Crik Faluzi', 'Cuarteto de Nos', 'Cuchillazo', 'Cultura Profetica', 'D.L.G.', 'Daddy Yankee', 'Daft Punk', 'Dalevuelta', 'Dalex', 'Damaris', 'Daniel F', 'Daniel Lazo', 'Daniela Darcourt', 'Darell', 'Darude', 'David Pabon', 'De La Ghetto', 'Deadly Apples', 'Deep Purple', 'Deyvis Orozco', 'Diazepunk', 'Difonía', 'Dina paucar', 'Dire Straits', 'Disturbed', 'DJ Towa', 'DLD', 'Dolores Delirio', 'Don Diablo', 'Don Omar', 'Don Tetto', 'Dragonforce', 'Duncan Dhu', 'Eagles', 'Ed Sheeran', 'Eddie Santiago', 'El Mato a un Policia Motorizado', 'Emergency Blanket', 'Eminem', 'Enanitos Verdes', 'Enjambre', 'Estado de Sitio', 'Europe', 'Eva Ayllon', 'Evanescence', 'Exporto Brasil', 'Fall Out Boy', 'Farruko', 'Fito Paez', 'Foo Fighters', 'Frágil', 'Frank Sinatra', 'Frankie Ruiz', 'Franz Ferdinand', 'GAIA', 'Gala Brie', 'Gary Glitter', 'Gaytan Castro', 'Gian Marco', 'Gilberto Santa Rosa', 'Golden Camaleon', 'Gondwana', 'Green Day', 'Grupo 5', 'Grupo Galé', 'Grupo Niche', 'Guajaja', 'Guns N\' Roses', 'Gusi', 'Gwen Stefani', 'Héctor "El Father"', 'Héctor Lavoe', 'Hermanos Yaipén', 'Hit la Rosa', 'Hoja de Parra', 'Hombres G', 'Imagine Dragons', 'Interpol', 'INYECTORES', 'Inzul', 'Iron Maiden', 'J Balvin', 'James Blake', 'Jean Paul Strauss', 'Jerry Rivera', 'Jesse & Joy', 'Jet', 'Jhay Cortez', 'Joe Arroyo', 'Joey Montana', 'Juan Diego Flores', 'Juanes', 'Judas Priest', 'Julieta Venegas', 'Justin Quiles', 'Kaiser Chiefs', 'Kanaku y el Tigre', 'KAROL G', 'Keane', 'Kings of Leon', 'KISS', 'Klaxons', 'La Bicicleta de Alan', 'La Inedita', 'La Liga del Sueño', 'La Maldita Costumbre', 'La Mente', 'La Mosca Tse-Tse', 'La Sarita', 'La-33', 'Laguna Pai', 'Lalo Ebratt', 'Lalo Rodriguez', 'Lana del Rey', 'Led Zeppellin', 'Leusemia', 'Líbido', 'Limp Bizkit', 'Linkin Park', 'Little Jesus', 'Los Auténticos Decadentes', 'Los Belkings', 'Los Bunkers', 'Los Cafres', 'Los Caribeños de Güadalupe', 'Los Destellos', 'Los Doltons', 'Los Fabulosos Cadillacs', 'Los Filipz', 'Los Mesoneros', 'Los Mirlos', 'Los Mojarras', 'Los Mortero', 'Los Outsaiders', 'Los Prisioneros', 'Los Protones', 'Los Saicos', 'Los Shapis', 'Los Villacorta', 'LP', 'Lucho Quequezana', 'Lucia De la Cruz', 'Luis Enrique', 'Luis Fonsi', 'Luis Silva', 'Lunay', 'M2H', 'Mackieavelico', 'Maelo Ruiz', 'Mago Oz', 'Maluma', 'Maná', 'Mar de Copas', 'Marc Anthony', 'Marilyn Manson', 'Marisol', 'Maroon V', 'Martin Garrix', 'Mauricio Mesones', 'Max Castro', 'Mecano', 'Megadeth', 'Metallica', 'Miguel Mateos', 'Miki González', 'Miley Cirus', 'Miranda!', 'Molotov', 'Morat', 'Muerdo', 'Mundaka', 'MUSE', 'My Chemical Romance', 'Nave Ascensor', 'Ni voz Ni Voto', 'Nicky Jam', 'Nirvana', 'No Recomendable', 'Nonpalidece', 'Nosequien y los Nosecuantos', 'N\'Samble', 'Oasis', 'Olaya Sound System', 'One Republic', 'Oscar D\'León', 'Ozuna', 'Panda', 'Panic! At The Disco', 'Pantera', 'Papa Roach', 'Papillón', 'Paramore', 'Paulo Londra', 'Pearl Jam', 'Pedro Capó', 'Pedro Suárez Vértiz', 'Phoenix', 'Pink Floyd', 'Pitbull', 'Plutonio de Alto Grado', 'Poison', 'POOOW!', 'Por Hablar', 'Porta', 'Queen', 'R.E.M.', 'Radiohead', 'Rage Againts The Machine', 'Ramones', 'Randy', 'Rapper School', 'Rata Blanca', 'Raúl Romero', 'Rauw Alejandro', 'Red Hot Chili Peppers', 'Reik', 'Río', 'ROSALÍA', 'Rossy War', 'Rubén Blades', 'Ruth Karina', 'Sandra Muente', 'Scorpions', 'Sebastian Yatra', 'Sech', 'Selena Gómez', 'Serial Asesino', 'Shakira', 'Shaw Mendes', 'Shushupe', 'Sia', 'Slayer', 'Slipknot', 'Soda Stereo', 'Son Tentación', 'Sonata Arctica', 'Sonia Morales', 'Stereonoiz', 'Submarino', 'Sum 41', 'Supertramp', 'Susan Prieto', 'System of a Down', 'Tainy', 'Tame Impala', 'Tego Calderon', 'Temple Sour', 'The Beach Boys', 'The Beatles', 'The Black Eyed Peas', 'The Clash', 'The Doors', 'The Jimi Hendrix', 'The Killers', 'The Kooks', 'The Offspring', 'The Police', 'The Ramones', 'The Rasmus', 'The Rolling Stones', 'The Smiths', 'The Strokes', 'The Velvet Underground', 'The Who', 'Thirty Seconds to Mars', 'Three Days Grace', 'Tiempofuera', 'Tigresa del Oriente', 'TINI', 'TK', 'Tourista', 'Travis Scott', 'Trebol Clan', 'Tremolo', 'Turbopótamos', 'Twisted Sister', 'Two Door Cinema Club', 'U2', 'Uchpa', 'Vampire Weekend', 'Ves Tal Vez', 'Vicentico', 'Victor Hugo', 'Victor Manuelle', 'Vilchez Huamán', 'Vilma Palma e Vampiros', 'Wanderlust', 'We The Lion', 'Wendy Sulca', 'William Luna', 'Willie Colón', 'Wisin & Yandel', 'Zen', 'Zero Balas', 'Zion & Lennox', 'Zoé']

    this.artistasList.forEach(element => {
      //Generos Checkbox los iniciamos en false
      this.artistasCheckbox.push(false);

    });

    //GENEROS DE INTERES
    this.generosList = ['A Capella', 'Banda Sonora', 'Blues', 'Corrido', 'Country', 'Cumbia', 'Disco', 'Drum and Bass', 'Electrónica', 'Flamenco', 'Folk', 'Funk', 'Garage', 'Gospel', 'Heavy Metal', 'Hip Hop', 'House', 'Indie', 'Jazz​', 'Merengue', 'Metal', 'Música Clásica', 'Música Instrumental', 'Música Pragmática', 'Pop', 'Punk', 'Ranchera', 'Rap', 'Reggae', 'Reggaeton', 'Rumba', 'Rhythm and Blues', 'Rock', 'Rock and Roll', 'Salsa', 'Samba', 'Ska', 'Son', 'Soul', 'Soundtrack', 'Tango', 'Techno', 'Vallenato']

    this.generosList.forEach(element => {
      //Generos Checkbox los iniciamos en false
      this.generosCheckbox.push(false);

    });
    //UTILIZANDO EL EVENTEMITTER
    //this.profileService.usuarioProfileAuth.subscribe(
    //(usuarioAuth: UsuarioProfile) => {
    //console.log(usuarioAuth);
    //this.usuarioProfile = usuarioAuth;
    //console.log(this.usuarioProfile);
    //});

  }

  guardarPreferencias() {

    let interesEventos: String = "";
    let interesArtistas: String = "";
    let interesGeneros: String = "";

    console.log("***********DESCRIPCION USUARIO*********");
    console.log(this.usuarioProfile.descripcionUsuario);

    console.log("***********EVENTOS SELECCIONADOS*********");
    //console.log(this.eventosSeleccionadosCheckbox);
    this.eventosSeleccionadosCheckbox.forEach(element => {
      interesEventos = interesEventos.concat(element.nombreEvento.toString(), " , ");

      //console.log("===============================")
      //console.log(element.id.toString());
      //console.log(this.usuarioProfile.id.toString());
      //console.log("===============================")

      //Obtenemos los intereses del usuario para modificarlo
      this.interesesUsuariosService.obtenerInteresesUsuarioPorIdUsuarioAndIdEvento(this.usuarioProfile.id.toString(), element.id.toString())
        .subscribe(data => {
          //console.log(this.interesesObtenido)
          this.interesesObtenido = data;
          //Le asignamos el valor de 5
          this.interesesObtenido[0].interes = 5;
          this.interesesObtenido[0].valoracion = 5;

          //console.log(this.interesesObtenido[0]);

          this.interesesUsuariosService.modificarInteresesUsuario(this.interesesObtenido[0])
            .subscribe(data => {
               console.log("Intereses de usuario modificados"+this.interesesObtenido[0].nombreEvento);
            })

        })
    });
    console.log(interesEventos);

    console.log("***********ARTISTAS SELECCIONADOS*********");
    //console.log(this.artistaSeleccionadosCheckbox);
    this.artistaSeleccionadosCheckbox.forEach(element => {
      interesArtistas = interesArtistas.concat(element.toString(), " , ");
    });
    console.log(interesArtistas);

    console.log("***********GENEROS SELECCIONADOS*********");
    //console.log(this.generosSeleccionadosCheckbox);
    this.generosSeleccionadosCheckbox.forEach(element => {
      interesGeneros = interesGeneros.concat(element.toString(), " , ");
    });
    console.log(interesGeneros);

    //Actualizando datos del usuario
    this.usuarioProfile.eventosInteres = interesEventos;
    this.usuarioProfile.artistasInteres = interesArtistas;
    this.usuarioProfile.generosMusicalesInteres = interesGeneros;

    this.profileService.modificarUsuarioPerfil(this.usuarioProfile)
      .subscribe(data => {
        alert("Se han registrado sus intereses con éxito...!!!");
        this.router.navigate(["landing"]);
      })

  }

  eventosSeleccionados(eventoSelect: HTMLInputElement, i: number) {

    //Invertimos el valor obtenido del Checkbox
    if (eventoSelect.value == 'true') {
      this.eventosCheckbox[i] = false;
    } else {
      this.eventosCheckbox[i] = true;
    }

    //Obtenemos la lista de eventos seleccionados
    this.eventosSeleccionadosCheckbox = [];
    this.eventosCheckbox.forEach((element, i) => {
      //si el checkbox esta seleccionado se añade a lista de eventos seleccionados
      if (element) {
        this.eventosSeleccionadosCheckbox.push(this.eventosList[i]);
      }
    });

    //console.log("***********EVENTOS SELECCIONADOS*********");
    //console.log(this.eventosSeleccionadosCheckbox);
  }

  generosSeleccionados(generoSelect: HTMLInputElement, i: number) {

    //Invertimos el valor obtenido del Checkbox
    if (generoSelect.value == 'true') {
      this.generosCheckbox[i] = false;
    } else {
      this.generosCheckbox[i] = true;
    }

    //Obtenemos la lista de generos seleccionados
    this.generosSeleccionadosCheckbox = [];
    this.generosCheckbox.forEach((element, i) => {
      //si el checkbox esta seleccionado se añade a lista de generos seleccionados
      if (element) {
        this.generosSeleccionadosCheckbox.push(this.generosList[i]);
      }
    });

    //console.log("***********GENEROS SELECCIONADOS*********");
    //console.log(this.generosSeleccionadosCheckbox);
  }

  artistasSeleccionados(artistaSelect: HTMLInputElement, i: number) {

    //Invertimos el valor obtenido del Checkbox
    if (artistaSelect.value == 'true') {
      this.artistasCheckbox[i] = false;
    } else {
      this.artistasCheckbox[i] = true;
    }

    //Obtenemos la lista de artistas seleccionados
    this.artistaSeleccionadosCheckbox = [];
    this.artistasCheckbox.forEach((element, i) => {
      //si el checkbox esta seleccionado se añade a lista de artistas seleccionados
      if (element) {
        this.artistaSeleccionadosCheckbox.push(this.artistasList[i]);
      }
    });
  }
}
