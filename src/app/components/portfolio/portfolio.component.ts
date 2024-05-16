import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  name: string = 'Nishtha Mistry';
  description: string =
    'Passionate Software Engineer creating innovative solutions using latest technologies.';
  project1T: string = 'Commission Management System';
}
