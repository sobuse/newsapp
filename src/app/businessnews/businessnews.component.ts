import { Component, OnInit } from '@angular/core';
import { NewsappapiservicesService } from '../service/newsappapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:NewsappapiservicesService) { }

  businessnewsDisplay: any = [];

  ngOnInit(): void {
    this._services.businessNews().subscribe((result) => {
      this.businessnewsDisplay = result.articles;
    })
  }

}
