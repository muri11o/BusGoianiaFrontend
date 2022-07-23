import { Component, OnInit } from '@angular/core';
import { TerminalService } from '../terminais.service';
import { RootTerminalOnibus } from '../rootTerminalOnibus';

@Component({
  selector: 'app-lista-terminais',
  templateUrl: './lista-terminais.component.html'
})
export class ListaTerminaisComponent implements OnInit {

  constructor(private terminalService: TerminalService) {

    this.root = {} as RootTerminalOnibus;

   }

  public root: RootTerminalOnibus;

  ngOnInit(): void {
    this.terminalService.obterTerminais()
    .subscribe(
      terminais => {
        this.root = terminais;
        console.log(terminais);
      },
      error => console.log(error)
    );
  }

}
