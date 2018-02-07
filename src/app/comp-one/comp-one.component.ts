import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss']
})
export class CompOneComponent implements OnInit {
  //
  private dataFromService: any;
  //
  constructor(
    private dataService: DataService
  ) {}
  //
  ngOnInit() {
    this.dataFromService = this.dataService.getServiceData();
    this.dataService.serviceDataChanged
      .subscribe(
        (data) => { this.dataFromService = data; },
        (error: any) => { console.log(error); }
      )
    ;
  }
  //
}
