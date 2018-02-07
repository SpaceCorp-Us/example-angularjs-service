import { EventEmitter, Injectable } from '@angular/core';

// import { Http } from '@angular/http';

@Injectable()
export class DataService {
  //
  serviceDataChanged = new EventEmitter<String[]>();
  private serviceData: any = 'Service Data';
  //
  constructor(
    // private http: Http
  ) {}
  //
  public getServiceData() {
    return this.serviceData;
  }
  //
  // fetchApiData() {}
  //
}

// EoF !
