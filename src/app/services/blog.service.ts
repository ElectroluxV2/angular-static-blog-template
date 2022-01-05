import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Blog } from "../interfaces/blog.interface";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  public async getBlog(): Promise<Blog> {
    return await firstValueFrom(this.http.get<Blog>("http://localhost:4200/assets/blog.json"));
  }

  public async getPost(filename: string): Promise<string> {
    const blob = await firstValueFrom(this.http.get(`http://localhost:4200/assets/blog/${filename}`, {
      'responseType': 'blob' as 'text'
    })) as unknown as Blob;

    return await blob.text();
  }
}
