import {Injectable} from '@angular/core';
import {PostConfig} from './post-config.model';


@Injectable()
export class PostConfigService {

  postConfig: PostConfig;

  constructor() {
  }

}
