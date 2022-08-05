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
  }
}
