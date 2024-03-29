import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePostRoutingModule } from './update-post-routing.module';
import { UpdatePostComponent } from './update-post.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
    UpdatePostRoutingModule,
    FormsModule
  ]
})
export class UpdatePostModule { }
