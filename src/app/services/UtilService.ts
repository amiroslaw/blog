import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  getAvifImgPath(imgPath: string) {
    const imgWithoutExtension = imgPath.split('.')[0];
    return imgWithoutExtension + '.avif'
  }

}
