import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post = [
    { title: 'First Post', content: 'This is the first post\'s content ' },
    { title: 'Second Post', content: 'This is the first post\'s content ' },
    { title: 'Third Post', content: 'This is the first post\'s content ' }
  ];

  constructor() { }

  ngOnInit() {
  }

}