import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//metadata - decorator
@NgModule({
  //modolus utilizados 
  declarations: [
    AppComponent
  ],
  //extras que vamos utilizar - httpmodule vem aqui
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  //oq vamos prover pros componentes. dependency injection
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
