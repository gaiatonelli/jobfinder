import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Job } from '../jobs/job.model';
import { JobService } from '../jobs/job.service';
import jlist from  'src/db.json'

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private jobService: JobService) { }

  jobs: Job[] = jlist;

  //storeJobs() {
  //  const jobs = this.jobService.getJobs();
  //  this.http
  //    .put(
  //      'src/db.json',
  //      jobs
  //    )
  //    .subscribe(response => {
  //      console.log(response);
  //    });
/*  }*/

  fetchJobs() {
    return this.http
      .get<Job[]>(
        'src/db.json'
      )
      .pipe(
        map(jobs => {
          return jobs.map(job => {
            return {
              ...job
            };
          });
        }),
        tap(jobs => {
          this.jobService.setJobs(jobs);
        })
      )
  }
}
