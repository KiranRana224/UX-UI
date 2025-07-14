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
import { MatTableMultiselectComponent } from './UX-UI/mat-table-multiselect/mat-table-multiselect.component';
import { FileXlsUploadComponent } from './UX-UI/fileuplod-download/file-xls-upload/file-xls-upload.component';
import { FormExampleComponent } from './UX-UI/form-example/form-example.component';
import { MultiSelectAllComponent } from './multi-select-all/multi-select-all.component';
import { SelectAllComponent } from './multi-select-all/select-all/select-all.component';
import { DialogParentComponent } from './dialog-parent/dialog-parent.component';
import { SearchformComponent } from './dialog-parent/searchform/searchform.component';
import { MatDialogModule } from '@angular/material/dialog'; // ✅ Add this

@NgModule({
  declarations: [
    AppComponent,
    SelectDropdownComponent,
    AutocompleteComponent,
    DebounceComponent,
    FileuplodDownloadComponent,
    DynamicTableComponent,
    MutliStepFormComponent,
    ScrollIndicatorComponent,
    FormarrayComponent,
    SidebarComponent,
    MatTableMultiselectComponent,
    FileXlsUploadComponent,
    FormExampleComponent,
    MultiSelectAllComponent,
    SelectAllComponent,
    DialogParentComponent,
    SearchformComponent,
  ],
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
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
