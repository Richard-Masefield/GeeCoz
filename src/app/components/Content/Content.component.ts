import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'content-component',
  templateUrl: 'Content.component.html',
  styleUrls: ['Content.component.scss'],
})
export class ContentComponent implements OnInit {

  title: string = "Content Component Title";
  content: string = "I am Content block";

  ngOnInit() { }

}
