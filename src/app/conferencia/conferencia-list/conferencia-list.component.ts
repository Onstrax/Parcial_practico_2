import { Component, OnInit } from '@angular/core';
import { ConferenciaService } from '../conferencia.service';
import { Conferencia } from '../conferencia';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css'],
})
export class ConferenciaListComponent implements OnInit {
  constructor(private conferenciaService: ConferenciaService) {}

  conferencias: Array<Conferencia> = [];
  upcoming!: string;
  selected: boolean = false;
  selectedConferencia!: Conferencia;

  getConferencias() {
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      this.conferencias = conferencias;
    });
  }

  getUpcoming() {
    let total = 0;
    let currentDate = new Date();
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      conferencias.forEach((c) => {
        let cDate = new Date(c.starts);
        if (cDate > currentDate) {
          total += 1;
        }
        this.upcoming = total.toString();
      });
    });
  }

  onSelected(conferencia: Conferencia): void {
    this.selected = true;
    this.selectedConferencia = conferencia;
  }

  ngOnInit() {
    this.getConferencias();
    this.getUpcoming();
  }
}
