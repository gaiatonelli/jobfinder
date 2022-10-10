import { Component, OnInit, Input } from '@angular/core';

import { Job } from '../../job.model';


@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {
  @Input() job: Job;               
  @Input() index: number;
  loaded = false;
  ngOnInit() {

    //set a timer for the skeleton loader to show data
    setInterval(() => {
      this.loaded = true;
    }, 2000);
  }

}
