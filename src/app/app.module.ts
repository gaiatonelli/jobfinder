import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobItemComponent } from './jobs/job-list/job-item/job-item.component';
import { AppRoutingModule } from './app-routing.module';
import { JobStartComponent } from './jobs/job-start/job-start.component';
import { JobEditComponent } from './jobs/job-edit/job-edit.component';
import { JobService } from './jobs/job.service';
import { SearchFilterPipe } from './search-filter.pipe';
import { AboutComponent } from './about/about.component';
import { Job } from './jobs/job.model';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobsComponent,
    JobListComponent,
    JobDetailComponent,
    JobItemComponent,
    JobStartComponent,
    JobEditComponent,
    SearchFilterPipe,
    AboutComponent,
    
  ],
  imports: [
    NgxSkeletonLoaderModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
