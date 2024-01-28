import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { HeroService } from './model/hero.service';
import { UserService } from './model/user.service';
import { TwainComponent } from './twain/twain.component';
import { TwainService } from './twain/twain.service';

import { WelcomeComponent } from './welcome/welcome.component';
import { ValidateUserNameDirective } from './template-form/directives/validate-username.directive';
import { MatchPasswordDirective } from './template-form/directives/match-password.directive';
import { PasswordPatternDirective } from './template-form/directives/password-pattern.directive';
import { CustomValidationService } from './template-form/services/custom-validation.service';

import { TemplateFormComponent } from './template-form/template-form.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
    FormsModule,
    DashboardModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [HeroService, TwainService, UserService, CustomValidationService],
  declarations: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    TwainComponent,
    WelcomeComponent,
    TemplateFormComponent,
    PasswordPatternDirective,
    ValidateUserNameDirective,
    MatchPasswordDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


