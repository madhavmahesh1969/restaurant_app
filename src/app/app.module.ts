import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule }  from 'primeng/primeng';

import { AppRoutingModule, RoutingComponents } from './app.routing';
import { AppComponent } from './app.component';
import { DataTableGridComponent } from './components/data-table-grid/data-table-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableGridComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
