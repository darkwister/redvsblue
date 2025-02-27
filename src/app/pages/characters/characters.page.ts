import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList } from '@ionic/angular/standalone';
import { CharacterComponent, Character } from 'src/app/components/character/character.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CharacterComponent, IonItem, IonList]
})
export class CharactersPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  personajes: Character[] = personajes;
}

export const personajes: Character[] = [
  {
    name: 'Michael J. Caboose',
    description: 'Uno de los personajes mas excentricos de la serie, es uno de los menos inteligentes, debido a esto y su actitud, una actitud bastante infantil, hace que trate las diversas situaciones de la serie como si fueran un tonto juego.',
    faction: "Blues",
    image: "assets/images/characters/caboose.jpg",
    actor: 'Joel Heyman',
    moments: [
      {
        url: "https://www.youtube.com/embed/FFG3miw_8K8"
      },
      {
        url: "https://www.youtube.com/embed/QP4s4fWyoW0?si=ii7yDD2rS4NDGL9X"
      },
      {
        url: "https://www.youtube.com/embed/2zRfBVGCyhM?si=s7ZcmUNPHibT0GhS"
      }
    ]
    /*"https://www.youtube.com/embed/FFG3miw_8K8", 
    "https://www.youtube.com/embed/QP4s4fWyoW0?si=ii7yDD2rS4NDGL9X", 
    "https://www.youtube.com/embed/2zRfBVGCyhM?si=s7ZcmUNPHibT0GhS"
    */
  },
  {
    name: "Lavernius Tucker",
    description: 'El inmaduro, sarcastico Tucker y su remarcada obsesion por las muejeres hace que este personaje siempre se encuentre haciendo chistes jocosos sobre las mismas cada que tiene la oportunidad. A medida que suceden los hechos de las series el personaje tiene un gran desarrollo en cuanto a su responsabilidad y capacidades dentro de el equipo azul. Ademas de que despues de adquirir un arma, fue impregando por un Alien, dando a luz a su hijo "Junior".',
    faction: "Blues",
    image: "assets/images/characters/tucker.jpg",
    actor: 'Jason Saldaña',
    moments: [ 
      {
        url: "https://www.youtube.com/embed/MvGpcRGM_VY?si=w1ex4G49fRWGhqX5"
      },
      {
        url: "https://www.youtube.com/embed/1ulwB4NTdMY?si=_qyxj6nU-s3L5a4-"
      },
      {
        url: "https://www.youtube.com/embed/P9COc2f1O-0?si=b2uvX2p61CsosX1s"
      }
      /*
      "https://www.youtube.com/embed/MvGpcRGM_VY?si=w1ex4G49fRWGhqX5",
      "https://www.youtube.com/embed/1ulwB4NTdMY?si=_qyxj6nU-s3L5a4-",
      "https://www.youtube.com/embed/P9COc2f1O-0?si=b2uvX2p61CsosX1s"
      */
    ]
  },
  {
    name: "Leonard L. Church",
    description: 'El lidel del equipo azul en Blood Gulch ademas de tener una relacion previamente con la agente "Tex", es un lider irritable y bastante gruñon, pero logra demostrar una capacidad considerable a la hora de evaluar las situaciones y lograr su cometido. A pesar de ser un "fantasma" en algun punto de la serie.',
    faction: "Blues",
    image: "assets/images/characters/church.jpg",
    actor: 'Burnie Burns',
    moments: [
      {
        url: 'https://www.youtube.com/embed/1Y3d3Ulel00?si=dY3DSs9DKl85CfAw'
      },
      {
        url: 'https://www.youtube.com/embed/21QPs0-2dUs?si=TPQnOLwHIuNrltxF'
      },
      {
        url: 'https://www.youtube.com/embed/WsZ-3RE1YsU'
      }
    ]
  },
  {
    name: 'Agente Texas "Tex"',
    faction: "Blues / Freelancer",
    description: 'Tex o en algunas ocaciones Allison. Una agente freelancer normalmente agrupada con el equipo azul de Blood Gulch, una mujer, mas tarde revelada como la inteligencia artificial "Program Beta", uno de los personajes mas letales y habilidoso en la serie, dado el hecho que es una mercenaria freelancer, con su entrenamiento y capacidades es uno de los miembros mas letales de el equipo azul de Blood Gulch.',
    image: "assets/images/characters/tex.jpg",
    actor: 'Kathleen Zuelch',
    moments: [
      {
        url: 'https://www.youtube.com/embed/DlLlXyzEr14?si=vum9LEwotYxRS-zO'
      },
      {
        url: 'https://www.youtube.com/embed/xHBCUMMZS5g?si=Jr3mTecKJ434s_rq'
      },
      {
        url: 'https://www.youtube.com/embed/4F2s8qSF3sg?si=cN8V7JFQyneVyuMx'
      }
    ]
  },
  {
    name: "Sarge",
    faction: "Reds",
    description: 'El agresivo e ilogico lider del equipo rojo, el unico que toma enserio al batalla contra el equipo azul, un militar a cargo del equipo rojo, ademas de ser el unico que muestra gran disciplina entre los soldados presentes en Blood Gulch. Es algo sociopata, sanguinario y un poco excentrico. Su relacion con sus otros miembros del equipo es rapidamente fundamentada al comparar el vehiculo "Warthog" con un Puma.',
    image: "assets/images/characters/sarge.jpg",
    actor: 'Matt Hullum',
    moments: [
      {
        url: 'https://www.youtube.com/embed/1YyTRV46yHg'
      },
      {
        url: 'https://www.youtube.com/embed/DS1736t5clE?si=AKDM5Ei48tLNFABv'
      },
      {
        url: 'https://www.youtube.com/embed/ngpny5MaYcc?si=0Y3jy5AAGJWYAfTJ'
      }
    ]
  },
  {
    name: "Dick Simmons",
    faction: "Reds",
    description: 'Usualmente la cabeza pensante y cuerda del equipo rojo, ademas de ser un sociopata compulsivo como su lider y un adulador del mismo, a pesar de el delirantee liderazgo de este ultimo. A pesar de las personalidades tan diferentes que tienen el y su compañero Grif, tienen una amistad bastante solida, incluso compartiendo algunas ideas en varios puntos de la serie.',
    image: "assets/images/characters/simmons.jpg",
    actor: 'Gus Sorola',
    moments: [
      {
        url: 'https://www.youtube.com/embed/rhfPpaKzLsg?si=Z6WOQy6O2dp-MMLY'
      },
      {
        url: 'https://www.youtube.com/embed/YcRW7iNtFKI'
      },
      {
        url: 'https://www.youtube.com/embed/8PUIXu3M37M'
      }
    ]
  },
  {
    name: 'Dexter Grif',
    faction: "Reds",
    description: 'El rebelde Grif, con una tendencia a no acatar ordenes de Sarge y a hacer comentarios sarcasticos a expensas de sus miembros de equipo, pasa la mayor parte de su tiempo con Simmons, con el cual tiene una amistad bastante curiosa, Apesar de su constante pereza la cual causa problemas a sus compañeros, constantemente esta echandose la culpa de las cosas que le pasan a su equipo, a pesar de la cantidad real de culpa que tiene sobre estas, es un gran amigo de Simmons a pesar de su diferencia de personalidad, comparatiendo ideas y curiosidades con este ultimo.',
    image: "assets/images/characters/grif.jpg",
    actor: 'Geoff Ramsey',
    moments: [
      {
        url: 'https://www.youtube.com/embed/YGLgrN_lzRg?si=AGDsGURQfchKVeXf'
      },
      {
        url: 'https://www.youtube.com/embed/jrkiguHDZzM'
      },
      {
        url: 'https://www.youtube.com/embed/GVhsSHuTL5k?si=rDkc16U5Ful75Ntp'
      }
    ]
  }
];
