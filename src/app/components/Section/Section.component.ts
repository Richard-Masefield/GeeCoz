import { Component, OnInit } from '@angular/core';
var coronis = require('./../../coronis.json');
@Component({
  selector: 'section-component',
  templateUrl: 'Section.component.html',
  styleUrls: ['Section.component.scss']
})
export class SectionComponent implements OnInit {
  title: string = 'Section Title';
  pages: Array<any> = [];
  section: Array<any> = [];

  ngOnInit() {
     this.section = coronis.pages[0].children[0];
     this.pages = coronis.pages[0].children[0].children;
    // this.pages = [];
    // this.pages.push({'path': 'blah', 'title': 'Page 1', 'content': 'blah'});
    // this.pages.push({'path': 'blah', 'title': 'Page 2', 'content': 'blah'});
    // this.pages.push({'path': 'blah', 'title': 'Page 3', 'content': 'blah'});

    console.log(this.pages);
  }
}
