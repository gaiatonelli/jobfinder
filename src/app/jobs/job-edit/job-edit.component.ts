import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

import { JobService } from '../job.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {
  id: number;
  editMode = false;
  jobForm: UntypedFormGroup;
  currentDate;
 

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  /*this appens when clicking the submit button on the form to add a new job*/

  onSubmit() {

    if (this.editMode) {
      this.jobService.updateJob(this.id, this.jobForm.value);
    } else {
      this.jobService.addJob(this.jobForm.value);
    }
    this.onCancel();

    this.currentDate = new Date();
  }
 /* closes the form and returns to the original path*/

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }


  /*get data from the form*/

  private initForm() {
    let jobName = '';
    let jobImagePath = '';
    let jobDescription = '';
    let jobCompany = '';
    let jobSkills = '';


    this.jobForm = new UntypedFormGroup({
      name: new UntypedFormControl(jobName, Validators.required),
      imagePath: new UntypedFormControl(jobImagePath, Validators.required),
      description: new UntypedFormControl(jobDescription, Validators.required),
      company: new UntypedFormControl(jobCompany, Validators.required),
      skills: new UntypedFormControl(jobSkills, Validators.required),

    });
  }
}
