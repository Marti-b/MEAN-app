import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input } from '@angular/core';
import { title } from 'process';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  /* posts = [
     { title: 'First Post', content: 'This is the first post\'s content ' },
     { title: 'Second Post', content: 'This is the second post\'s content ' },
     { title: 'Third Post', content: 'This is the third post\'s content ' }
   ]; */
  @Input() posts: Post[] = [];
  postService: PostsService;

  constructor(postsService: PostsService) {
    this.postService = postsService;
  }

  ngOnInit() {
  }

}
