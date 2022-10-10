import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsComponent } from './jobs/jobs.component';
import { JobStartComponent } from './jobs/job-start/job-start.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobEditComponent } from './jobs/job-edit/job-edit.component';
import { JobsResolverService } from './jobs/jobs-resolver.service';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },   /*homepage is the first page when you open the app*/
  {
    path: 'jobs',    /* following the job path you see what's inside the jobsComponent wich has many children such as jobstart and jobedit'*/
    component: JobsComponent,
    children: [
      { path: '', component: JobStartComponent },
      { path: 'new', component: JobEditComponent },
      {
        path: ':id',
        component: JobDetailComponent,
        resolve: [JobsResolverService]
      },
      {
        path: ':id/edit',
        component: JobEditComponent,
        resolve: [JobsResolverService]
      },
    ]
  },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
