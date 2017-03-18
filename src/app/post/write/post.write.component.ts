import { Component, Input} from '@angular/core';
import { PostService } from './../post.service';

@Component({
  selector: 'post-tips',
  templateUrl: './post.write.component.html',
  styleUrls: ['./post.write.component.css'],
  providers: [PostService]
})
export class WritePostComponent {
  private post: string;
  private title: string;
  constructor(private postService: PostService) {}
  writePost() {
    if(this.title.length&&this.post.length){
      this.postService.writePost(this.title, this.post);
    }
  }
}
