import { HorarioPontoOnibus } from "./horarioPontoOnibus";


export class RootHorarioPontoOnibus {

    constructor() {
        this.success = false;
        this.data = [];
    }

    public success: boolean;
    public data: HorarioPontoOnibus[]; 
}