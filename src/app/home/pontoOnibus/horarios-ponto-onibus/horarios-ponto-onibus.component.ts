import { Component, OnInit } from '@angular/core';
import { RootHorarioPontoOnibus } from '../rootHorarioPontoOnibus';
import { PontoOnibusService } from '../pontoOnibus.service';
import { HorarioPontoOnibus } from '../horarioPontoOnibus';

@Component({
  selector: 'app-horarios-ponto-onibus',
  templateUrl: './horarios-ponto-onibus.component.html'
})
export class HorariosPontoOnibusComponent implements OnInit {

  constructor(private pontoOnibusService: PontoOnibusService) {
    this.numeroPontoOnibus = '';
    this.numeroPontoOnibusView = '';
    this.root = {} as RootHorarioPontoOnibus;
   }

  public numeroPontoOnibus: string;
  public numeroPontoOnibusView: string;
  public root: RootHorarioPontoOnibus;

  private h1: HorarioPontoOnibus = { numeroLinha: '934', destino:'R MINAS GERAIS', proximo:'1', seguinte:'---'};
  private h2: HorarioPontoOnibus = { numeroLinha: '317', destino:'SANTO HILARIO', proximo:'17', seguinte:'---'};
  private h3: HorarioPontoOnibus = { numeroLinha: '019', destino:'T CRUZEIRO', proximo:'8', seguinte:'---'};

  ngOnInit(): void {
  }

  getHorariosPontoOnibus(){
    this.numeroPontoOnibusView = this.numeroPontoOnibus;

     this.pontoOnibusService.obterHorariosOnibus(this.numeroPontoOnibus)
     .subscribe(
       horarios => {
         this.root = horarios;
         console.log(horarios);
      },
       error => console.log(error)
     );

    

    //  this.root.success = true;
    //  this.root.data = [
    //   this.h1, this.h2, this.h3
    //  ]

     //console.log(this.root);
  }
}
