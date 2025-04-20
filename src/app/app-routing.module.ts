import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormarrayComponent } from './Forms/formarray/formarray.component';

const routes: Routes = [{ path: 'settings', component: FormarrayComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
