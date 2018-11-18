import * as btsp from 'bluetooth-serial-port';

const address = process.env.SIGN_ADDRESS;
if (!address) throw Error('Must provide the environment variable SIGN_ADDRESS');
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