import { Component, OnInit } from '@angular/core';
import { NewsappapiservicesService } from '../service/newsappapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services: NewsappapiservicesService) { }

  technewsDisplay: any = [];

  ngOnInit(): void {

    this._services.technews().subscribe((result) => {
      this.technewsDisplay = result.articles;
    });
  }

}
