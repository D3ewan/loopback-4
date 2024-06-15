import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
// Custom REST connector that intercepts requests and responses


const config = {
  name: 'restds',
  connector: 'rest',
  baseURL: 'https://api.restful-api.dev/',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'https://api.restful-api.dev/objects',
        fullResponse: true
      },
      functions: {
        getObject: [],
      },
    },
    {
      template: {
        method: 'POST',
        url: 'https://api.restful-api.dev/objects',
        body: '{body}',
        fullResponse: true
      },
      functions: {
        createObject: ['body'],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DeocoderDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'deocoder';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.deocoder', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
