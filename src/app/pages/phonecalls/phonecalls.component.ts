import { Component, OnInit } from '@angular/core';
import { PhoneCallsService } from './phonecalls.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'phone-calls',
  templateUrl: `./phonecalls.component.html`,
  styleUrls: ['./phonecalls.scss']
})
export class PhoneCalls {

  data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "email";
    sortOrder = "asc";

    constructor(private service: PhoneCallsService) {
    this.service.getData().then((data) => {
      this.data = data;
    });
  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }

}
