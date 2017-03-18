import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { VoterComponent } from './vote/vote.component';
import { ReadMoreComponent } from './style/readmore.component';
import { CommentComponent } from './comments/comment.component';
import { UserComponent } from './user/user.component';
import { WritePostComponent } from './post/write/post.write.component';
const appRoutes: Routes = [
  {
    path: '',
    component: NewsfeedComponent,
    data: { title: 'Alexa Power Community' }
  },
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'Profile' }
  },
  {
    path: 'write/post',
    component: WritePostComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    VoterComponent,
    ReadMoreComponent,
    CommentComponent,
    UserComponent,
    WritePostComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
