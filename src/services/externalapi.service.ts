import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {DeocoderDataSource} from '../datasources';
import {ITEM_REQUEST_SCHEMA, ITEM_RESPONSE} from '../utils/index';

export interface Externalapi {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getObject(): Promise<typeof ITEM_RESPONSE>;
  createObject(body: typeof ITEM_REQUEST_SCHEMA): Promise<typeof ITEM_RESPONSE>;
}

export class ExternalapiProvider implements Provider<Externalapi> {
  constructor(
    // deocoder must match the name property in the datasource json file
    @inject('datasources.deocoder')
    protected dataSource: DeocoderDataSource = new DeocoderDataSource(),
  ) { }

  value(): Promise<Externalapi> {
    return getService(this.dataSource);
  }
}
