import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { ChangeBackgroundColorDirective } from './change-background-color.directive';
import { ModuloPipe } from './modulo.pipe';
import { NameToUppercasePipe } from './name-to-uppercase.pipe';
import { AppendWordPipePipe } from './append-word-pipe.pipe';
import { DecimalToBinaryPipePipe } from './decimal-to-binary-pipe.pipe';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FirstDirectiveDirective,
    ChangeBackgroundColorDirective,
    ModuloPipe,
    NameToUppercasePipe,
    AppendWordPipePipe,
    DecimalToBinaryPipePipe,
    CountriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
