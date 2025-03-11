import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDropdownComponent } from './UX-UI/select-dropdown/select-dropdown.component';
import { materialModule } from 'src/material.module';
import { AutocompleteComponent } from './UX-UI/autocomplete/autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
@NgModule({
  declarations: [AppComponent, SelectDropdownComponent, AutocompleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
