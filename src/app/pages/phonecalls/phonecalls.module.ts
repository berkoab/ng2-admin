import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { PhoneCalls } from './phonecalls.component';
import { PhoneCallsService } from './phonecalls.service';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './phonecalls.routing';
import { DataFilterPipe } from './data-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    DataTableModule,
    NgaModule,
  ],
  declarations: [
    PhoneCalls,
    DataFilterPipe,
  ],
  providers: [
    PhoneCallsService
  ]
})
export class PhoneCallsModule {}
