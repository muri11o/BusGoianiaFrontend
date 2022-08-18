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
    this.isValid = true;
  }

  public email: string;
  public confirmarEmail: string;
  public nome: string;
  public senha: string;
  public cadastroRealizdo: boolean;
  public isValid: boolean;

  cadastrar() {

    if (!this.IsValidEmail(this.email, this.confirmarEmail)) {
      this.isValid = false;
      if (this.isValid == false)
        return;
    }

    if (!this.IsValidSenha(this.senha)) {
      this.isValid = false;
      if (this.isValid == false)
        return;
    }


    this.contaService.realizarCadastro(this.email, this.confirmarEmail, this.nome, this.senha)
      .subscribe();

    this.cadastroRealizdo = true;
    this.isValid = true;

  }

  ngOnInit(): void {

  }

  IsValidEmail(email: string, emailConfirm: string) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email)) {
      if (email == emailConfirm) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  IsValidSenha(senha: string) {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/.test(senha)) {
      return true;
    }

    return false;
  }


}
