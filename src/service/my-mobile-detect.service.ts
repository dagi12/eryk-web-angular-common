import {Injectable} from '@angular/core';
import * as MobileDetect from 'mobile-detect';


@Injectable()
export class MyMobileDetectService {
  isMobile: boolean;

  constructor() {
    const md = new MobileDetect(window.navigator.userAgent);
    const mobileString = md.mobile();
    this.isMobile = !!mobileString;
  }

}
