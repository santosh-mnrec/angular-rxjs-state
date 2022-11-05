import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostApiService } from './post-api.service';

@Injectable()
export class PostService {
  private readonly todosSubject = new BehaviorSubject<Post[]>([]);
  postSource$ = this.todosSubject.asObservable();
  private readonly singleTodoSubject = new BehaviorSubject<Post>(null);
  singlePostSource$ = this.singleTodoSubject.asObservable();

  private posts: Post[] = [];
  constructor(private postApiService: PostApiService) {}

  initialize() {
    this.postApiService.loadAll().subscribe((data) => {
      this.posts = data;
      this.todosSubject.next([...this.posts]);
    });
  }

  addTodo(post: Post) {
    this.posts.push(post);
    this.todosSubject.next(this.posts);
  }
  delete(post: Post) {
    const postToBeDeleted = this.posts.find((x) => x.id === post.id);
    const i = this.posts.indexOf(postToBeDeleted);
    this.posts.splice(i, 1);
    this.todosSubject.next([...this.posts]);
  }
  selectSingleTodo(id) {
    const selected = this.posts.find((x) => x.id == id);
    this.singleTodoSubject.next(selected);
  }
}
