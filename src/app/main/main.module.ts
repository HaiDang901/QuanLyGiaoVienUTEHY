
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { RoleGuard } from '../lib/auth.guard';
// import { Role } from '../models/role';
import { SharedModule } from '../shared/shared.module';
import { UnauthorizedComponent } from '../shared/unauthorized/unauthorized.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { KhoaComponent } from './khoa/khoa/khoa.component';
import { BoMonComponent } from './khoa/bo-mon/bo-mon.component';
import { BacLuongComponent } from './luong/bac-luong/bac-luong.component';
import { LuongComponent } from './luong/luong/luong.component';
import { NangLuongComponent } from './luong/nang-luong/nang-luong.component';
import { MonHocComponent } from './monhoc/mon-hoc/mon-hoc.component';
import { LichDangKiComponent } from './monhoc/lich-dang-ki/lich-dang-ki.component';
import { GiaoviensModule} from './giaoviens/giaoviens.module';
import { from } from 'rxjs';
import { LuongModule } from './luong/luong.module';
import { KhoaModule } from './khoa/khoa.module';
import { MonhocModule } from './monhoc/monhoc.module';


export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
      {
        path: 'unauthorized',
        component: UnauthorizedComponent,
      },
      // {
      //   path: 'user',
      //   loadChildren: () =>
      //     import('./user/user.module').then((m) => m.UserModule),
      //   // canActivate: [RoleGuard],
      //   // data: { roles: [Role.Admin] },
      // },
      {
        path: 'giaovien',
        loadChildren: () =>
          import('./giaoviens/giaoviens.module').then((m) => m.GiaoviensModule),
        // canActivate: [RoleGuard],
        // data: { roles: [Role.Admin, Role.User] },
      },
      // {
      //   path: 'khoa',
      //   loadChildren: () =>
      //     import('./khoa/khoa.module').then((m) => m.KhoaModule),
      //   // canActivate: [RoleGuard],
      //   // data: { roles: [Role.Admin, Role.User] },
      // },
      // {
      //   path: 'luong',
      //   loadChildren: () =>
      //     import('./luong/luong.module').then((m) => m.LuongModule),
      //   // canActivate: [RoleGuard],
      //   // data: { roles: [Role.Admin, Role.User] },
      // },
      // {
      //   path: 'monhoc',
      //   loadChildren: () =>
      //     import('./monhoc/monhoc.module').then((m) => m.MonhocModule),
      //   // canActivate: [RoleGuard],
      //   // data: { roles: [Role.Admin, Role.User] },
      // },
    ],
  },
];

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    KhoaComponent,
    BoMonComponent,
    BacLuongComponent,
    LuongComponent,
    NangLuongComponent,
    MonHocComponent,
    LichDangKiComponent,
    // LyLichKhoaHocComponent,
    // GiaoVienComponent,
    // HocVanComponent,
    // HopDongLdComponent,
    // NgachCongChucComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GiaoviensModule,
    // LuongModule,
    // KhoaModule,
    // MonhocModule,
    RouterModule.forChild(mainRoutes)
  ],
})
export class MainModule { }
