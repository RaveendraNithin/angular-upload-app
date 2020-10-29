import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import library modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import components
import { AppComponent } from './app.component';

// import auth guard
import { AuthGuard } from './guards/auth.guard';

// import auth interceptor
import { AuthInterceptor } from './auth/auth.interceptor';

// import route module
import { AppRoutingModule } from './app-routing.module';

// import custom modules
import { AuthorisationModule } from './authorisation/authorisation.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AuthorisationModule,
    DashboardModule
  ],
  exports: [],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
