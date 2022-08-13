import { Favorito } from "./favorito";

export class RootFavorito {

    constructor() {
        this.success = false;
        this.data = [];
    }

    public success: boolean;
    public data: Favorito[]; 
}