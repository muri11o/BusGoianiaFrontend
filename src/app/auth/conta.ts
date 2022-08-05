export class Conta {
    constructor(email: string, confirmarEmail: string, nome: string, senha: string) {
        this.email = email;
        this.confirmarEmail = confirmarEmail;
        this.nome = nome;
        this.senha = senha;
    }

    public email: string;
    public confirmarEmail: string;
    public nome: string;
    public senha: string;
    
}