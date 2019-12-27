//first thing I did:
// had to run npm install @angular/platform-browser --save was missing the platform-browser dependency
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';
import { DataTableDirective } from 'angular-datatables';

// import * as $ from '@Types/jquery';
@NgModule({
  declarations: [
        AppComponent,
  ],
  imports:[
    // $,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [DataTableDirective],
  bootstrap: [AppComponent]
})
// export default $
export class AppModule { }




