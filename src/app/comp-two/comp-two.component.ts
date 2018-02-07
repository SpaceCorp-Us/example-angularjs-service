import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss']
})
export class CompTwoComponent implements OnInit {
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
