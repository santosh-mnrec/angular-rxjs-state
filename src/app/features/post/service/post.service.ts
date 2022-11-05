import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostApiService } from './post-api.service';

@Injectable()
export class PostService {
  private readonly postsSubject = new BehaviorSubject<Post[]>([]);
  postSource$ = this.postsSubject.asObservable();
  private readonly commentsSubject = new BehaviorSubject<Comment>(null);
  commentSource$ = this.commentsSubject.asObservable();
  private readonly singleTodoSubject = new BehaviorSubject<Post>(null);
  singlePostSource$ = this.singleTodoSubject.asObservable();

  private posts: Post[] = [];
  constructor(private postApiService: PostApiService) {}

  vm = combineLatest([this.singleTodoSubject, this.commentSource$]).subscribe(
    (data) => {
      console.log(data);
    }
  );
  initialize() {
    this.commentSource$ = this.postApiService.loadPostWithComments(1);
    this.postApiService.loadAll().subscribe((data) => {
      this.posts = data;
      this.postsSubject.next([...this.posts]);
    });
  }

  addTodo(post: Post) {
    this.posts.push(post);
    this.postsSubject.next(this.posts);
  }
  delete(post: Post) {
    const postToBeDeleted = this.posts.find((x) => x.id === post.id);
    const i = this.posts.indexOf(postToBeDeleted);
    this.posts.splice(i, 1);
    this.postsSubject.next([...this.posts]);
  }
  selectSingleTodo(id) {
    const selected = this.posts.find((x) => x.id == id);
    this.singleTodoSubject.next(selected);
  }
}
