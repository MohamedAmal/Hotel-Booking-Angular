import { Injectable } from '@angular/core';
// import { userModel } from 'src/models/users.model';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class CountriesService {
    constructor(private _http: HttpClient) {    
    }

    getCountry() {
        return this._http.get("assets/countries/countries.json")
    }
}