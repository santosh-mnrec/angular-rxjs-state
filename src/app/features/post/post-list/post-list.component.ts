import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  constructor(private postService: PostService) {
    this.postService.initialize();
  }
  postForm: FormGroup;
  posts$ = new Observable<Post[]>();

  singlePost;

  ngOnInit() {
    this.postForm = new FormGroup({
      value: new FormControl(''),
    });
    this.posts$ = this.postService.postSource$;
    console.log(this.posts$);
  }
  onSubmit() {}
  details(id) {}
}
