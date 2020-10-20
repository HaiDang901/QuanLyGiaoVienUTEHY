import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [UnauthorizedComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule
  ],
})
export class SharedModule { }
