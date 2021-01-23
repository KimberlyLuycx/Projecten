import { Component } from '@angular/core';

@Component({
  selector: 'tourofheroes',
  templateUrl: './tourofheroes.component.html',
  styleUrls: ['./tourofheroes.component.css']
})
export class TourofheroesComponent {

      constructor(private router: Router) {
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
}
