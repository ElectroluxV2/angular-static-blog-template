import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from "./blog.service";
import { RenderedPost } from "../interfaces/rendered-post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<boolean> {
  constructor(private blogService: BlogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RenderedPost> | Promise<RenderedPost> | any {
    return this.blogService.getPost(`${route.paramMap.get('slug')}.html`);
  }
}
