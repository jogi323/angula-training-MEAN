import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotesComponent } from './components/quotes/quotes.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'quotes', component: QuotesComponent},
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
