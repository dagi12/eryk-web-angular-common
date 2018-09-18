import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {PostConfigService} from './post-config.service';

import {PostConfig} from './post-config.model';
import {UserService} from '../../../../flota-web-angular-common/src/user/user.service';

@Injectable()
export class PostConfigResolver implements Resolve<PostConfig> {

  constructor(private postConfigService: PostConfigService, private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostConfig> | Promise<PostConfig> | PostConfig {
    return this.postConfigService.postConfig || this.userService
      .me()
      .map(response => {
        this.postConfigService.postConfig = response.postConfig;
        return response.postConfig;
      });
  }


}
