import {Inject, Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {FLOTA_CONFIG} from '../../../flota-web-angular-common/src/flota-config.token';
import {FlotaConfig} from '../../../flota-web-angular-common/src/flota-config.interface';

const SEPARATOR = ' > ';

@Injectable()
export class MyTitleService {

  observable: Observable<RouteInfo>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title,
              @Inject(FLOTA_CONFIG) private flotaConfig: FlotaConfig) {
    this.observable = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .map((data) => {
        if (data.title) {
          // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
          return data;
        } else {
          // If not, we do a little magic on the url to create an approximation
          const reduce = this.router.url.split('/').reduce((acc, frag) => {
            if (acc && frag) {
              acc += SEPARATOR;
            }
            return acc + MyTitleService.ucFirst(frag);
          });
          return {
            title: reduce
          };
        }
      });
  }

  static ucFirst(string) {
    if (!string) {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  init() {
    this.observable
      .subscribe((pathString) => {
        this.titleService.setTitle(`${this.flotaConfig.loginTitle} | ${pathString}`);
      });
  }

}

export interface RouteInfo {
  title: string;
  helpContent: string;
}
