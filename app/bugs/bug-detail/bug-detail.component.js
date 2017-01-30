"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var constants_1 = require('../../shared/constant/constants');
var BugDetailComponent = (function () {
    function BugDetailComponent(formB) {
        this.formB = formB;
        this.modalId = "bugModal";
        this.statuses = constants_1.STATUS;
        this.severities = constants_1.SEVERITY;
        this.statusArr = [];
        this.severityArr = [];
    }
    BugDetailComponent.prototype.ngOnInit = function () {
        this.statusArr = Object.keys(this.statuses).filter(Number);
        this.severityArr = Object.keys(this.severities).filter(Number);
        this.configureForm();
    };
    BugDetailComponent.prototype.configureForm = function () {
        this.bugForm = this.formB.group({
            title: [''],
            status: [''],
            severity: [''],
            description: ['']
        });
    };
    BugDetailComponent.prototype.submitForm = function () {
    };
    BugDetailComponent.prototype.addBug = function () {
    };
    BugDetailComponent.prototype.updateBug = function () {
    };
    BugDetailComponent.prototype.freshForm = function () {
    };
    BugDetailComponent.prototype.cleanBug = function () {
    };
    BugDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bug-detail',
            templateUrl: 'bug-detail.component.html',
            styleUrls: ['bug-detail.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], BugDetailComponent);
    return BugDetailComponent;
}());
exports.BugDetailComponent = BugDetailComponent;
//# sourceMappingURL=bug-detail.component.js.map