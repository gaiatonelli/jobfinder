import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Job } from '../job.model';
import { JobService } from '../job.service';
import { JobEditComponent } from '../job-edit/job-edit.component';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: Job;
  id: number;

  constructor(private jobService: JobService,
              private route: ActivatedRoute,
              private router: Router) {
  }

 /* this sections tells which job should be opened based on the id*/

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.job = this.jobService.getJob(this.id);
        }
      );
  }




}
