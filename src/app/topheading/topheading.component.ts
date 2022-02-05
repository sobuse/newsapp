import { Component, OnInit } from '@angular/core';
import { NewsappapiservicesService } from '../service/newsappapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private _services: NewsappapiservicesService) { }
  // display data
  topHeadingDisplay: any = [];

  ngOnInit(): void {
    this._services.topHeader().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })


  }

}
