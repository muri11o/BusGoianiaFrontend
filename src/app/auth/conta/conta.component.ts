import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html'
})
export class ContaComponent implements OnInit {

  constructor(private contaService: ContaService) {
    this.email = '';
    this.confirmarEmail = '';
    this.nome = '';
    this.senha = '';
    this.cadastroRealizdo = false;
   }
  
  public email: string;
  public confirmarEmail: string;
  public nome: string;
  public senha: string;
  public cadastroRealizdo: boolean;

  cadastrar() {

    this.contaService.realizarCadastro(this.email, this.confirmarEmail, this.nome, this.senha)
    .subscribe();

    this.cadastroRealizdo = true;
  }

  ngOnInit(): void {

  }

}
