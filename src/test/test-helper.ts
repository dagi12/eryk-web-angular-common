/* tslint:disable:class-name */
/**
 * Created by Eryk Mariankowski on 18.01.2017.
 */
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Response, ResponseOptions} from '@angular/http';
import {Component} from '@angular/core';

export function setupConnections(mockedBackend: MockBackend, options: any, requestUrl: string) {
  mockedBackend.connections.subscribe((connection: MockConnection) => {
    if (connection.request.url === requestUrl) {
      const responseOptions = new ResponseOptions(options);
      const response = new Response(responseOptions);
      connection.mockRespond(response);
    }
  });
}

export function mockComponent(options: Component): any {
  const metadata: Component = {
    selector: options.selector,
    template: options.template || '',
    inputs: options.inputs,
    outputs: options.outputs
  };
  return Component(metadata)(class _ {
  });
}
