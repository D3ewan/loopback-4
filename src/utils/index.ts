import {ResponseObject, SchemaObject} from '@loopback/rest';

export const ITEM_RESPONSE: ResponseObject = {
  description: 'Array of Item Response',
  content: {
    'application/json': {
      schema: {
        type: 'array',
        items: {
          type: 'object',
          title: 'ItemResponse',
          properties: {
            id: {type: 'string'},
            name: {type: 'string'},
            data: {
              type: 'object',
              properties: {
                color: {type: 'string'},
                capacity: {type: 'string'},
                price: {type: 'number'},
                generation: {type: 'string'},
                year: {type: 'number'},
                'CPU model': {type: 'string'},
                'Hard disk size': {type: 'string'},
                'Case Size': {type: 'string'},
                'Strap Colour': {type: 'string'},
                description: {type: 'string'},
                'capacity GB': {type: 'number'},
                'Screen size': {type: 'number'},
                Capacity: {type: 'string'},
                Price: {type: 'string'}
              },
              additionalProperties: true,
            },
          },
          additionalProperties: false,
        },
      },
    },
  },
};

export const ITEM_REQUEST_SCHEMA: SchemaObject = {
  type: 'object',
  title: 'ItemRequest',
  properties: {
    id: {type: 'string'},
    name: {type: 'string'},
    data: {
      type: 'object',
      properties: {
        color: {type: 'string'},
        capacity: {type: 'string'},
        price: {type: 'number'},
        generation: {type: 'string'},
        year: {type: 'number'},
        'CPU model': {type: 'string'},
        'Hard disk size': {type: 'string'},
        'Case Size': {type: 'string'},
        'Strap Colour': {type: 'string'},
        description: {type: 'string'},
        'capacity GB': {type: 'number'},
        'Screen size': {type: 'number'},
        Capacity: {type: 'string'},
        Price: {type: 'string'}
      },
      additionalProperties: true,
    },
  },
  required: ['id', 'name'], // Add required fields as per your requirements
  additionalProperties: false,
};
