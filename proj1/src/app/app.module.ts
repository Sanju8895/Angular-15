import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';

@NgModule({
  declarations: [  // components,Directive, Pipes
    AppComponent,
    DataBindingComponent,
    CustomComponentComponent
  ],
  imports: [  // module are being imported here
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],  // all services sre being added here
  bootstrap: [AppComponent]
})
export class AppModule { }
