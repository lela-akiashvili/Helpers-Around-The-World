import { Component, inject, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { CardComponent } from '../../components/card/card.component';
import { SideFormComponent } from '../../components/side-form/side-form.component';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  imports: [CardComponent, SideFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private requestsService = inject(RequestsService);
  private authService = inject(AuthService);
  requestsSignal = this.requestsService.requestsSignal;

  signOut(): void {
    this.authService.signOut();
  }
  ngOnInit(): void {
    // this.requestsService.getRequests().subscribe(data=>{
    //   console.log(data);
    // this.requestsService.requestsSignal.set(data)
    // });
    // ;
  }
}
