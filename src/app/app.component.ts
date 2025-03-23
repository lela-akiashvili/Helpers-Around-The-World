import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'Home';

  private authService = inject(AuthService);
  isSignedIn = this.authService.isSignedIn;

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.authService.getSession().subscribe();
    
  }
}
