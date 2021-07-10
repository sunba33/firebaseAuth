import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public authService:AuthServiceService
  ) { }

  ngOnInit(): void {
  }

}
