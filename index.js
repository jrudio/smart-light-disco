const { Client } = require('tplink-smarthome-api');
const BulbWrapper = require('./bulb');

const client = new Client();

(async () => {
  const device = await client.getDevice({ host: '192.168.254.35' })

  const isOn = await device.getPowerState()

  if (!isOn) {
    await device.togglePowerState()
  }

  const bulb = new BulbWrapper(device)

  bulb.startDisco(750)
})()
