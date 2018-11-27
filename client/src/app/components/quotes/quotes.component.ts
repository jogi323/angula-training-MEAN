import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public QuotesDetails: Object;


  public QuoteList = [];


  constructor() {
    this.QuotesDetails = {
      author: '',
      quote: ''
    };
    console.log(this.QuoteList);

  }
  addQuotes(QuotesDetails) {

    if (QuotesDetails.quote && QuotesDetails.author) {
      this.QuoteList.push(QuotesDetails);
    }

  }
  ngOnInit() {
  }

}
