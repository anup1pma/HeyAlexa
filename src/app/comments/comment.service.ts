import { Injectable } from '@angular/core';
import { COMMENTS } from './comment.data';
import { Comment } from './comment.model';

@Injectable()
export class CommentService {
    private comments: Comment[];

    constructor(){
    this.comments = COMMENTS;
  }

  getComments(postId) {
    let retComments = [];
    for(let comment of this.comments) {
      if(comment.postId === postId) {
        retComments.push(comment);
      }
    }
    return retComments;
  }

  writeComment(postId, commentContent) {
    var comment = {
      username: 'anupsing',
      content: commentContent,
      postId: postId
    };
    if(comment.content.length){
    this.comments.push(comment);
  }
  }

}
