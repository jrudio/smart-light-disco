Disco Mode For Smart Lights*
===

![](disco_720.gif)

**Bulbs supported:**

- Kasa KL130, LB130

Planned support:

- A19 C by GE

* Only a select few smart bulbs are supported due to access to these bulbs

How to use
===
Note: seems to work best if you npm tplink-smarthome-api right into the repo directory
`npm install smart-light-disco`

```
const { Client } = require('tplink-smarthome-api');
const BulbWrapper = require('smart-light-disco');

const client = new Client();

(async () => {
  const device = await client.getDevice({ host: '192.168.254.35' })

  const isOn = await device.getPowerState()

  if (!isOn) {
    await device.togglePowerState()
  }

  // pass in the device
  const bulb = new BulbWrapper(device)

  // fire up disco
  bulb.startDisco(750)
})()
```
