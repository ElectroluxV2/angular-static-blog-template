import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RenderedPost } from "../../interfaces/rendered-post.interface";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent {
  public post: RenderedPost = this.activatedRoute.snapshot.data['post'];

  constructor(private activatedRoute: ActivatedRoute) { }
}
