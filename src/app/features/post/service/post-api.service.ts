import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';

@Injectable()
export class PostApiService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  loadAll() {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  create(todo: Post) {
    return this.http.post(`${this.baseUrl}/todos`, JSON.stringify(todo));
  }

  delete(todoId: number) {
    return this.http.delete(`${this.baseUrl}/todos/${todoId}`);
  }
}
