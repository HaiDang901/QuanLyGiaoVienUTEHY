import { ProductService } from 'src/app/productservice';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { NgachCongChucComponent } from './ngach-cong-chuc/ngach-cong-chuc.component';
import { HocVanComponent } from './hoc-van/hoc-van.component';
import { LyLichKhoaHocComponent } from './ly-lich-khoa-hoc/ly-lich-khoa-hoc.component';
import { HopDongLdComponent } from './hop-dong-ld/hop-dong-ld.component';
import { GiaoVienComponent } from './giao-vien/giao-vien.component';

import { ToastModule } from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
// import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';

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

    RouterModule.forChild([
      {
        path: 'giaovien',
        component: GiaoVienComponent,
      },
      {
        path: 'hocvan',
        component: HocVanComponent,
      },
      {
        path: 'hopdong',
        component: HopDongLdComponent,
      },
      {
        path: 'lylich',
        component: LyLichKhoaHocComponent,
      },
      {
        path: 'ngachcongchuc',
        component: NgachCongChucComponent,
      }
  ]),
  ],
  providers: [ProductService, MessageService, ConfirmationService]

})
export class GiaoviensModule { }
