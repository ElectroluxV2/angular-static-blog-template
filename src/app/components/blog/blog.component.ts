import { AfterViewInit, Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RenderedPost } from "../../interfaces/rendered-post.interface";
// @ts-ignore
import { SimpleLightbox } from "simplelightbox/src/simple-lightbox.js";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements AfterViewInit {
  public post: RenderedPost = this.activatedRoute.snapshot.data['post'];
  private readonly isBrowser: boolean;

  constructor(private activatedRoute: ActivatedRoute, @Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public ngAfterViewInit(): void {
    this.isBrowser && new SimpleLightbox('.image');
  }
}
