import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {LOGIN_TITLE} from '../../../main.helper';
import {Title} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';

const SEPARATOR = ' > ';

@Injectable()
export class MyTitleService {

  observable: Observable<string>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) {
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
          return data.title;
        } else {
          // If not, we do a little magic on the url to create an approximation
          return this.router.url.split('/').reduce((acc, frag) => {
            if (acc && frag) {
              acc += SEPARATOR;
            }
            return acc + MyTitleService.ucFirst(frag);
          });
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
        this.titleService.setTitle(`${LOGIN_TITLE} | ${pathString}`);
      });
  }

}
