import { AccessToken } from "./accessToken";


export class RootAccessToken {

    constructor() {
        this.success = false;
        this.data = new AccessToken();
    }

    public success: boolean;
    public data: AccessToken; 
}