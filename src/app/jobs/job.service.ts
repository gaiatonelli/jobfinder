import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Job } from './job.model';
import jlist from 'src/db.json'
 

@Injectable()
export class JobService {
  jobsChanged = new Subject<Job[]>();

  /*import job list from json file*/

  private jobs: Job[] = jlist;


  constructor() { }

  setJobs(jobs: Job[]) {
    this.jobs = jobs;
    this.jobsChanged.next(this.jobs.slice());
  }

  getJobs() {
    return this.jobs.slice();
  }

  getJob(index: number) {
    return this.jobs[index];
  }

  updateJob(index: number, newJob: Job) {
    this.jobs[index] = newJob;
    this.jobsChanged.next(this.jobs.slice());
  }


  addJob(job: Job) {
    this.jobs.push(job);
    this.jobsChanged.next(this.jobs.slice());
    //let jobs = [];
    //if (localStorage.getItem('jlist')) {
    //  jobs = JSON.parse(localStorage.getItem('jlist'));
    //  jobs = [job, ...jobs];

    //}
    //else {
    //  jobs = [job];
    //}
    //localStorage.setItem('jlist', JSON.stringify(jobs));

  }
}
