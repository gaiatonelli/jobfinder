import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit{
  jobs: Job[];
  subscription: Subscription;
  searchForm;
  public searchText: Job['name'];

  constructor(private jobService: JobService,
              private router: Router,
              private route: ActivatedRoute,) {

  }

  ngOnInit() {
    this.subscription = this.jobService.jobsChanged
      .subscribe(                    //add a job to array of jobs
        (jobs: Job[]) => {
          this.jobs = jobs;
        }
      );
    this.jobs = this.jobService.getJobs();  
  }

  onNewJob() {
    this.router.navigate(['new'], {relativeTo: this.route});  /*if the button newJob is clicked the path changes to new*/
  }
}
