import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamDashboardRoutingModule } from './stream-dashboard-routing.module';
import { StreamDashboardComponent } from './stream-dashboard/stream-dashboard.component';


@NgModule({
  declarations: [StreamDashboardComponent],
  imports: [
    CommonModule,
    StreamDashboardRoutingModule
  ]
})
export class StreamDashboardModule { }
