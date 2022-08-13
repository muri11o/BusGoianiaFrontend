export class Favorito {
    constructor(id: string, usuarioId: string, numeroPonto: string) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.numeroPonto = numeroPonto;
    }

    public id: string;
    public usuarioId: string;
    public numeroPonto: string;
}