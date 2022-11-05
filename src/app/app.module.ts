import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './features/post/post/post.component';
import { PostListComponent } from './features/post/post-list/post-list.component';
import { PostApiService } from './features/post/service/post-api.service';
import { PostService } from './features/post/service/post.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,

    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, PostComponent, PostListComponent],
  bootstrap: [AppComponent],
  providers: [PostApiService, PostService],
})
export class AppModule {}
