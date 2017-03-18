import { Component } from '@angular/core';
import { CommentService } from './comments/comment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./../assets/bootstrap.css'],
  providers: [CommentService]
})
export class AppComponent {
  
}
