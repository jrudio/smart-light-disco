const { Client } = require('tplink-smarthome-api');
const BulbWrapper = require('./bulb');

const client = new Client();

(async () => {
  const device = await client.getDevice({ host: '192.168.68.113' })

  const isOn = await device.getPowerState()

  if (!isOn) {
    await device.togglePowerState()
  }

  const bulb = new BulbWrapper(device)

  //bulb.startDisco(350)
  bulb.startFlagLoop(5000)
})()
