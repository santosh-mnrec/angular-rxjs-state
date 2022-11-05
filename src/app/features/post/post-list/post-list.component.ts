import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  constructor() {}
  postForm: FormGroup;
  posts$ = new Observable<Post[]>();
  singlePost;

  ngOnInit() {
    this.postForm = new FormGroup({
      value: new FormControl(''),
    });
    
  }
  onSubmit() {}
  details(id) {}
}
