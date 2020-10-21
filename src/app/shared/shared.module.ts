
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import {ToastModule} from 'primeng/toast';

import { ToastModule } from 'primeng/toast';
import {  ToolbarModule} from 'primeng/toolbar';
import {  TableModule} from 'primeng/table';
import {  RatingModule} from 'primeng/rating';
import {  DialogModule} from 'primeng/dialog';
import {  RadioButtonModule} from 'primeng/radiobutton';
import {  InputNumberModule} from 'primeng/inputnumber';
 import {  ConfirmDialogModule} from 'primeng/confirmdialog';
 import {  ConfirmationService} from 'primeng/api';
import {  FileUploadModule} from 'primeng/fileupload';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';


@NgModule({
  declarations: [UnauthorizedComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    RatingModule,
    DialogModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    FileUploadModule,

    // CalendarModule,
		// SliderModule,
		// MultiSelectModule,
		// ContextMenuModule,
		// DropdownModule,
		// ButtonModule,
    // InputTextModule,
    // ProgressBarModule,
    // InputTextareaModule,
    
  ],
  exports: [
  
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    RatingModule,
    DialogModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    FileUploadModule,

    ],
})
export class SharedModule { }
