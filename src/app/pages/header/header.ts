import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuOpen = false;

  constructor(private router: Router) {
    document.addEventListener('click', this.closeMenuOnClickOutside.bind(this));
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  closeMenuOnClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-dropbox')) {
      this.menuOpen = false;
    }
  }

  goTo(route: string, event: MouseEvent) {
    event.stopPropagation();
    this.menuOpen = false;
    this.router.navigate([`/${route}`]);
  }

  logout(event: MouseEvent) {
    event.stopPropagation();
    this.menuOpen = false;
    this.router.navigate(['/login']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
