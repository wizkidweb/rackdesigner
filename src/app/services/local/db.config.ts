import { DBConfig } from 'ngx-indexed-db';

/**
 * The local database config.
 */
export const dbConfig: DBConfig = {
  name: 'rd-db',
  version: 1,
  objectStoresMeta: [
    {
      store: 'users',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
      ],
    },
    {
      store: 'racks',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'size', keypath: 'size', options: { unique: false } },
      ],
    },
    {
      store: 'devices',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'rack_id', keypath: 'rack_id', options: { unique: false } },
        { name: 'hardware_id', keypath: 'hardware_id', options: { unique: false } },
      ],
    },
    {
      store: 'hardware',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'size', keypath: 'size', options: { unique: false } },
        { name: 'maxDraw', keypath: 'maxDraw', options: { unique: false } },
        { name: 'color', keypath: 'color', options: { unique: false } },
      ],
    },
    {
      store: 'ports',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'hardware_id', keypath: 'hardware_id', options: { unique: false } },
        { name: 'type', keypath: 'type', options: { unique: false } },
        { name: 'xPos', keypath: 'xPos', options: { unique: false } },
        { name: 'yPos', keypath: 'yPos', options: { unique: false } },
        { name: 'output', keypath: 'output', options: { unique: false } },
      ],
    },
    {
      store: 'connections',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'from_device_id', keypath: 'from_device_id', options: { unique: false } },
        { name: 'from_port_id', keypath: 'from_port_id', options: { unique: false } },
        { name: 'to_device_id', keypath: 'to_device_id', options: { unique: false } },
        { name: 'to_port_id', keypath: 'to_port_id', options: { unique: false } },
        { name: 'color', keypath: 'color', options: { unique: false } },
      ],
    },
  ],
};