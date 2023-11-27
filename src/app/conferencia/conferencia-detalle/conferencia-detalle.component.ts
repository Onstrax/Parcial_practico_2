import { Component, Input, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ActivatedRoute } from '@angular/router';
import { ConferenciaService } from '../conferencia.service';

@Component({
  selector: 'app-conferencia-detalle',
  templateUrl: './conferencia-detalle.component.html',
  styleUrls: ['./conferencia-detalle.component.css'],
})
export class ConferenciaDetailComponent implements OnInit {
  @Input() conferencia!: Conferencia;

  constructor(
  ) {}

  ngOnInit() {
  }
}
