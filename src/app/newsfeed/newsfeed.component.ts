import { Component } from '@angular/core';
import { PostService } from './../post/post.service';
import { CommentService } from './../comments/comment.service';
import { Post } from './../post/post.model';

@Component({
  selector: 'newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css','./../../assets/bootstrap.css'],
  providers: [PostService, CommentService]
})
export class NewsfeedComponent {
  private posts: Post[];
  constructor(private postService: PostService, private commentService: CommentService) {
    this.posts = postService.getPosts();
  }
  getComments(postId) {
    return this.commentService.getComments(postId);
  }
  onVote(event) {
   this.postService.updateVote(event);
 }
}
