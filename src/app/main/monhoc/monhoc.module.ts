import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { LichDangKiComponent } from './lich-dang-ki/lich-dang-ki.component';
import { MonHocComponent } from './mon-hoc/mon-hoc.component';

export const mainRoutes: Routes = [
  {
    path: 'monhoc',
    component: MonHocComponent,
  },
  {
    path: 'lichgiangday',
    component: LichDangKiComponent,
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
        path: 'monhoc',
        component: MonHocComponent,
      },
      {
        path: 'lichgiangday',
        component: LichDangKiComponent,
      },
    ]),
  ],
  bootstrap:    [ MonHocComponent ],
  providers: [ MessageService, ConfirmationService]

})
export class MonhocModule { }
