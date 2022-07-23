import { TerminalOnibus } from "./terminalOnibus";

export class RootTerminalOnibus {

    constructor() {
        this.success = false;
        this.data = [];
    }

    public success: boolean;
    public data: TerminalOnibus[]; 
}