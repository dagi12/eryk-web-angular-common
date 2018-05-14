import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiConfigService {
  constructor() {
    this._apiUrl = environment.API_URL;
  }

  private _version: string;

  get version(): string {
    return this._version;
  }

  private _apiUrl: string;

  get apiUrl(): string {
    return this._apiUrl;
  }

  public url(serviceUrl?: string, endpointUrl?: string): string {
    let resultUrl: string = this._apiUrl + (serviceUrl || '') + '/' + (endpointUrl || '');
    while (resultUrl.slice(-1) === '/') {
      resultUrl = resultUrl.slice(0, -1);
    }
    return resultUrl;
  }

  public simpleUrl(serviceUrl: string) {
    return this._apiUrl + serviceUrl;
  }

}
