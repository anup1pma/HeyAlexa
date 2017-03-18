import { Component, Input} from '@angular/core';
import { Comment } from './comment.model';
import { CommentService } from './comment.service'
@Component({
  selector: 'comments',
  templateUrl: './comment.component.html',
  styleUrls: ['./../../assets/bootstrap.css', './comment.component.css']
})
export class CommentComponent {
  @Input() comments: Comment[];
  @Input() postId: string;
  constructor(private commentService: CommentService) {}
  writeComment(input: HTMLInputElement) {
    this.commentService.writeComment(this.postId, input.value);
    input.value = null;
  }
}
