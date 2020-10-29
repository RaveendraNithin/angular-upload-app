import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorisationService } from 'src/app/services/authorisation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  toastMessage: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthorisationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signUp(this.signUpForm.value)
      .subscribe((data) => {
        console.log(data);
        this.toastMessage = data['message'];
        setTimeout(() => {
          this.toastMessage = '';
          this.router.navigate(['/authorisation/signin'], { relativeTo: this.route });
        }, 1000);
      },
      error => {
        console.log(error);
      });
  }

}
