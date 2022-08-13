import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AppSettings } from "./appsettings";

@Injectable()
export class AppSettingsService {
    getSettings() : Observable<AppSettings> {
        let settings = new AppSettings();
        return of<AppSettings>(settings);
    }
}