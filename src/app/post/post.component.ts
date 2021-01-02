import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  readonly rootURI =  'http://localhost:59890/api';
  constructor( private http: HttpClient) { 
    debugger;
    
  }
  Posts:any = [];
  ngOnInit(): void {
    this.GetPosts(this.pageSize,  0);  
  }
//#region pagig
length = 100;
pageSize = 10;
pageSizeOptions: number[] = [5, 10, 25, 100];
SearchText = " ";//intialization
PageIndex= 0;
OnPageChange(e) {
  this.PageIndex = e.pageIndex;
  this.pageSize = e.pageSize;
  this.GetPosts(this.pageSize,  this.PageIndex);
}
async GetPosts(pageSize: number,  PageIndex: number) {
  this.http.get(this.rootURI+'/Post/GetPosts/'+pageSize+'/'+this.SearchText+'/'+PageIndex).toPromise()
    .then(
      o => { // Success
         debugger;
      let dd:any = o;
      let oTempPosts:any = dd.data;
    console.log(oTempPosts)
    this.length = dd.length;
    this.Posts = oTempPosts;//set
      }); 
 
}
search() {
debugger;
    this.GetPosts(this.pageSize,  this.PageIndex);
}

}
