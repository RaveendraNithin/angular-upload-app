import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorisationService } from 'src/app/services/authorisation.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm = new FormGroup({
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
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    // this.token = this.route.snapshot.queryParams['token'] || null;
    // this.exp = this.route.snapshot.queryParams['exp'] || null;
    // if (this.token) {
    //   localStorage.setItem('currentUser', JSON.stringify({
    //     'token': this.token
    //   }))
    //   this._router.navigate([this.returnUrl]);
    // }
  }

  onSubmit() {
    console.log(this.signInForm.value);
    this.authService.signIn(this.signInForm.value)
      .subscribe((response) => {
        console.log(response);
        this.toastMessage = 'Sign in successful';
        if (response && response['token']) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(response));
        }
        setTimeout(() => {
          this.toastMessage = '';
          this.router.navigate(['/dashboard'], { relativeTo: this.route });
        }, 1000);
      },
        error => {
          console.log(error);
        });
  }

}
