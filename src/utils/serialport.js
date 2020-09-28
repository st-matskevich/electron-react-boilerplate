import { remote } from 'electron';
// import SerialPort from 'serialport';

/**
 * @typedef {typeof import('serialport')} SerialPort
 */

/**
 * @constant
 * @type {SerialPort}
 */
const SerialPort = remote.require('serialport');

export const getPorts = async () => {
  return await SerialPort.list();
};
