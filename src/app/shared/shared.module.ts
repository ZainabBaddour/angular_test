import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputValueComponent } from './input-value/input-value.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { RouterModule } from '@angular/router';
import { MyLoaderComponent } from './my-loader/my-loader.component';

@NgModule({
  declarations: [
   CardComponent,
   FilterComponent,
   InputSelectComponent,
   InputValueComponent ,
   CardDetailComponent,
   MyLoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    
  ],
  exports:[
    CardComponent,
    FilterComponent,
    InputValueComponent,
    InputSelectComponent,
    CardDetailComponent,
    MyLoaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
