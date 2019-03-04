import {Inject, Injectable} from '@angular/core';
import {ErykConfig} from '../eryk.interface';
import {ERYK_CONFIG} from '../eryk.token';

@Injectable()
export class ApiConfigService {
  private _oauthApiUrl: string;

  constructor(@Inject(ERYK_CONFIG) config: ErykConfig) {
    this._apiUrl = config.baseUrl;
    this._oauthApiUrl = config.oauthApiUrl;
  }

  private _apiUrl: string;

  get apiUrl(): string {
    return this._apiUrl;
  }

  url(serviceUrl?: string, endpointUrl?: string): string {
    let resultUrl: string = this._apiUrl + (serviceUrl || '') + '/' + (endpointUrl || '');
    while (resultUrl.slice(-1) === '/') {
      resultUrl = resultUrl.slice(0, -1);
    }
    return resultUrl;
  }

  simpleUrl(serviceUrl: string) {
    return this._apiUrl + serviceUrl;
  }

  oauthApiUrl(serviceUrl: string) {
    return this._oauthApiUrl + serviceUrl;
  }

}
