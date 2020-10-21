import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { NangLuongComponent } from './nang-luong/nang-luong.component';
import { LuongComponent } from './luong/luong.component';
import { BacLuongComponent } from './bac-luong/bac-luong.component';



export const mainRoutes: Routes = [
  {
    path: 'luong',
    component: LuongComponent,
  },
  {
    path: 'bacluong',
    component: BacLuongComponent,
  },
  {
    path: 'nangluong',
    component: NangLuongComponent,
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
        path: 'luong',
        component: LuongComponent,
      },
      {
        path: 'bacluong',
        component: BacLuongComponent,
      },
      {
        path: 'nangluong',
        component: NangLuongComponent,
      },
    ]),
  ],
  bootstrap:    [ LuongComponent ],
  providers: [ MessageService, ConfirmationService]

})
export class LuongModule { }
