const { Client } = require('tplink-smarthome-api');
const BulbWrapper = require('./bulb');

const client = new Client();

(async () => {
  const device = await client.getDevice({ host: '192.168.254.35' })
  const bulb = new BulbWrapper(device)

  const isOn = await device.getPowerState()

  if (!isOn) {
    await device.togglePowerState()
  }

  const state = await device.lighting.getLightState()
  // const { hue } = state
  // let newHue = 300

  // console.log(state)
  // console.log(hue)

  // if (hue > 0) {
  //   newHue = 0
  // }

  // try {
  //   await bulb.setColor(BulbWrapper.Blue())
  // } catch (err) {
  //   console.log('SET COLOR ERROR')
  //   console.log(err)
  //   console.log(err)
  //   console.log('END SET COLOR')
  // }

  console.log(state)
})()
