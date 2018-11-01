import * as btsp from 'bluetooth-serial-port';

const address = '98d332113529';
export const serial = new btsp.BluetoothSerialPort();

serial.findSerialPortChannel(address,
    (channel) => {
      serial.connect(address, channel, () => {
        console.log('connected');
      }, () => {
        console.log('cannot connect');
      });
    },
    () => {
        console.log('error finding address');
    },
  );