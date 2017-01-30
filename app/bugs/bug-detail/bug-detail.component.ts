import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { STATUS, SEVERITY } from '../../shared/constant/constants';


@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css' ]
})
export class BugDetailComponent implements OnInit {
    private modalId = "bugModal";
    private bugForm: FormGroup;
    private statuses = STATUS;
    private severities = SEVERITY;
    private statusArr: string[] = [];
    private severityArr: string[] = [];

    constructor(private formB: FormBuilder) { }

    ngOnInit() {
        this.statusArr = Object.keys(this.statuses).filter(Number);
        this.severityArr = Object.keys(this.severities).filter(Number);
        this.configureForm();
    }

    configureForm() {
        this.bugForm = this.formB.group({
            title: [''],
            status: [''],
            severity: [''],
            description: ['']
        });
    }

    submitForm() {
        
    }

    addBug() {
    }

    updateBug() {
    }

    freshForm() {

    }
    
    cleanBug() {
    }

}