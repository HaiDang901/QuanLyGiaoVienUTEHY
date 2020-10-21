import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { KhoaComponent } from './khoa/khoa.component'
import { BoMonComponent } from './bo-mon/bo-mon.component';


export const mainRoutes: Routes = [
  {
    path: 'khoa',
    component: KhoaComponent,
  },
  {
    path: 'bomon',
    component: BoMonComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'khoa',
        component: KhoaComponent,
      },
      {
        path: 'bomon',
        component: BoMonComponent,
      },
    ]),
  ],
  bootstrap:    [ KhoaComponent ],
  providers: [ MessageService, ConfirmationService]

})
export class KhoaModule { }
