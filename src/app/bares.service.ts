import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Bar } from './Bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaresService {
  constructor(private client : HttpClient) { }

  getBares(): Observable<Bar[]> { //  getBares(): Bar[] {
    // let octavio : Bar ={
    //   id : "1",
    //   nombre : "Octavio"      
    // };

    // let casaMacario : Bar ={
    //   id : "2",
    //   nombre : "Casa Macario"      
    // };

    // let esi : Bar ={
    //   id : "3",
    //   nombre : "ESI"      
    // };

    // let bares = [];
    // bares.push(octavio,casaMacario,esi);
    // return bares;

    let info = {
      latitud : 40,
      logitud : 5,
      radio : 1000
    };	

    return this.client.post<Bar[]>("http://localhost/platos/getBares",info);

  }
}
