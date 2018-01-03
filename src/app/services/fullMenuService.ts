import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FullMenu } from '../model/full-menu.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FullMenuService {
    
    constructor(private http: Http) {}

    getMenuData() {
        return this.http.get('assets/data/full-menu-data.json')
                    .toPromise()
                    .then(res => <FullMenu[]> res.json().data)
                    .then(data => { return data; });
    }
}