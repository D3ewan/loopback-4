import {inject, intercept} from '@loopback/core';
import {get, post, requestBody, response} from '@loopback/rest';
import {Externalapi} from '../services';
import {ITEM_REQUEST_SCHEMA, ITEM_RESPONSE} from '../utils';

console.log(typeof ITEM_RESPONSE);
export class ExternalapicallingController {
  constructor(
    @inject('services.Externalapi') protected newFetch: Externalapi,
    @inject('services.Externalapi') protected newCreate: Externalapi,
  ) { }

  @get('/getData')
  @response(200, ITEM_RESPONSE)
  @intercept('interceptors.externalApiInterceptor')
  async getData(): Promise<typeof ITEM_RESPONSE> {
    const res = await this.newFetch.getObject();
    console.log(res.headers);
    return res.body;
  }

  @post('/postData')
  @response(200, ITEM_RESPONSE)
  @intercept('interceptors.externalApiInterceptor')
  async postData(@requestBody({
    content: {
      'application/json': {
        schema: ITEM_REQUEST_SCHEMA,
      },
    },
  })
  body: typeof ITEM_REQUEST_SCHEMA
  ): Promise<typeof ITEM_RESPONSE> {

    const res = await this.newCreate.createObject(body);
    console.log(res.headers);
    return res.body;
  }
}
