
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { NgachCongChucComponent } from './ngach-cong-chuc/ngach-cong-chuc.component';
import { HocVanComponent } from './hoc-van/hoc-van.component';
import { LyLichKhoaHocComponent } from './ly-lich-khoa-hoc/ly-lich-khoa-hoc.component';
import { HopDongLdComponent } from './hop-dong-ld/hop-dong-ld.component';
import { GiaoVienComponent } from './giao-vien/giao-vien.component';




@NgModule({
  declarations: [
    NgachCongChucComponent,
    LyLichKhoaHocComponent,
    HopDongLdComponent,
    HocVanComponent,
    GiaoVienComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      // {
      //   path: 'order',
      //   component: OrderComponent,
      // },
      // {
      //   path: 'product',
      //   component: ProductComponent,
      // },
      // {
      //   path: 'type',
      //   component: TypeComponent,
      // },
  ]),
  ],
  bootstrap:    [ GiaoVienComponent ],
  providers: [ MessageService, ConfirmationService]

})
export class GiaoviensModule { }
