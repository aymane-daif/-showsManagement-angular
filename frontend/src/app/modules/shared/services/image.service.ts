import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private sanitizer: DomSanitizer) {}

  getImage(postImage: any) {
    let base64data =
      'data:' + postImage.contentType + ';base64,' + postImage.data;
    return this.sanitizer.bypassSecurityTrustUrl(base64data);
  }
}
