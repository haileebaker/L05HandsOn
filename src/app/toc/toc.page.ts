import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Exposition",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Rising Action",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | The Climax",
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | Falling Action",
      url: "/chapter4"
    },
    {
      title: "Chapter 5 | The Resolution",
      url: "/chapter5"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
