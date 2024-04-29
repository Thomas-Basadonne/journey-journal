import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  login() {
    // Implementa la logica per il login
    console.log('Effettua il login...');
  }
}
