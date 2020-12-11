import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly pages : string[] =
    ['About Us', 'Menu', 'Board', 'Contract'];

}
