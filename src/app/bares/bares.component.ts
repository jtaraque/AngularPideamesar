import { Component, OnInit } from '@angular/core';
import { Bar } from '../Bar';
import { BaresService } from '../bares.service';

@Component({
  selector: 'app-bares',
  templateUrl: './bares.component.html',
  styleUrls: ['./bares.component.css']
})
export class BaresComponent implements OnInit {
  bares? : Bar[]; // el ? significa que hay un atributo que puede o no tener valor

  constructor(private baresService : BaresService) { }

  ngOnInit(): void {
    this.baresService.getBares().subscribe(
      resultado => this.bares = resultado
    );
  }

}
