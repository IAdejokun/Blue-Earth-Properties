import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isScrolled = false;

  @HostListener('window:scroll', [])

  onScroll(): void{
    this.isScrolled = window.scrollY > 50
  }

 
}