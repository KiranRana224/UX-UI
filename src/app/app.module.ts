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
import { DebounceComponent } from './UX-UI/debounce/debounce.component';
import { FileuplodDownloadComponent } from './UX-UI/fileuplod-download/fileuplod-download.component';
import { DynamicTableComponent } from './UX-UI/dynamic-table/dynamic-table.component';
import { MutliStepFormComponent } from './UX-UI/mutli-step-form/mutli-step-form.component';
import { ScrollIndicatorComponent } from './scroll-indicator/scroll-indicator.component';
import { FormarrayComponent } from './Forms/formarray/formarray.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './UX-UI/sidebar/sidebar.component';
@NgModule({
  declarations: [AppComponent, SelectDropdownComponent, AutocompleteComponent, DebounceComponent, FileuplodDownloadComponent, DynamicTableComponent, MutliStepFormComponent, ScrollIndicatorComponent, FormarrayComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MatOptionModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
