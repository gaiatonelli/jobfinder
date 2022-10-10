import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Job } from './job.model';
import { DataStorageService } from '../shared/data-storage.service';
import { JobService } from './job.service';

@Injectable({ providedIn: 'root' })
export class JobsResolverService implements Resolve<Job[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private jobsService: JobService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const jobs = this.jobsService.getJobs();

    if (jobs.length === 0) {
      return this.dataStorageService.fetchJobs();
    } else {
      return jobs;
    }
  }
}
