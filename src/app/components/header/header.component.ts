import { Component, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  showMenu: boolean = false;
  isLargeScreen: boolean = window.innerWidth > 785; 

  ngOnInit() {
    this.updateScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateScreenSize();
  }

  updateScreenSize() {
    this.isLargeScreen = window.innerWidth > 785;
    if (this.isLargeScreen) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }
  onShowMenu() {
    this.showMenu = !this.showMenu;
  }
}
