import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public QuotesDetails =[{Authorname:"", Quote:""}];
    
   
  public QuoteList=[];
  

  constructor() { 
    console.log(this.QuoteList);
  
 }
  addQuotes(QuotesDetails)
  {
    this.QuoteList=[];
    QuotesDetails.forEach(element=>{
    if(this.QuotesDetails.length>0){
      this.QuoteList.push(element);
    } 
  });
  
  }
/*
  addQuote(QuoteDetails)
  {
    this.QuoteList=[];
    QuoteDetails.forEach(quote=>{
    if(QuoteDetails!==null)
    {
      this.QuoteList.push(QuoteDetails);  
    }
  });
    
  }
*/
  ngOnInit() {
  }

}
