import { Injectable } from '@angular/core';
import { POSTS } from './post.data';
import { Post } from './post.model';
import { CommentService } from './../comments/comment.service';

@Injectable()
export class PostService {
  private posts: Post[];
  constructor(private commentService: CommentService ){
    this.posts = POSTS;
  }

  getPosts(): Post[]  {
    return this.posts;
  }
  writePost(title,content) {
    var post = new Post();
    post.content = content;
    post.username = 'anupsing';
    post.title = title;
    post.voteCount = 0;
    post.id = '10';
    post.userLevel = 'Master';
    this.posts.push(post);
  }
  getComments(postId) {
    return this.commentService.getComments(postId);
  }
  updateVote(input) {
    let tempPosts = [];
    for(let post of this.posts) {
      if(post.id === input.postId) {
        post.voteCount += input.myVote;
      }
      tempPosts.push(post);
    }
    this.posts= tempPosts;

    for(let post of this.posts) {
      console.log(post);
    }
  }
}
