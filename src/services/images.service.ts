import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Images } from 'src/models/images.model';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {


  
  url: string;

  constructor(
    private http: HttpClient
  ) {
  
    this.url = environment.API_URL;
  }

  getByOtherId(otherId: string) {
    return this.http.get<Images>(`${this.url}/api/images/get-by-otherid.php?OtherId=${otherId}`)
  }

  update(image: Images) {
    return this.http.post<Images>(
      `${this.url}/api/images/update-image.php`, image
    );
  }
  updateRange(images: Images[]) {
    return this.http.post<Images>(
      `${this.url}/api/images/update-image-range.php`, images
    );
  }
  addRange(images: Images[]) {
    return this.http.post<Images>(
      `${this.url}/api/images/add-image-range.php`, images
    );
  }
  add(company: Images) {
    return this.http.post<Images>(
      `${this.url}/api/images/add-image.php`, company
    );
  }



}
