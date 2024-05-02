import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template:
    '<div class="spinner-grow text-danger" style="width: 3rem; height: 3rem" role="status" > <span class="visually-hidden">Loading...</span></div>',
  styles: '',
})
export class SpinnerComponent {}
