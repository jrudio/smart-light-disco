// BulbWrapper wraps around the bulb from 'tplink-smarthome-api'
class BulbWrapper {
  constructor (bulb) {
    this.bulb = bulb
    this.hue = 0
    this.saturation = 0
    this.colorTemp = 0
    this.brightness = 0
  }

  static Blue () {
    return {
      hue: 239,
      saturation: 99,
      colorTemp: 0,
    }
  }

  static Red () {
    return {
      hue: 0,
      saturation: 100,
      colorTemp: 0,
    }
  }

  static Green () {
    return {
      hue: 120,
      saturation: 100,
      colorTemp: 0,
    }
  }

  static Purple () {
    return {
      hue: 300,
      saturation: 100,
      colorTemp: 0,
    }
  }

  // Pink not pink, it's like a peach
  static Pink () {
    return {
      hue: 349,
      saturation: 24,
      colorTemp: 0,
    }
  }

  static Brown () {
    return {
      hue: 30,
      saturation: 100,
      colorTemp: 0,
    }
  }

  static White () {
    return {
      hue: 0,
      saturation: 0,
      colorTemp: 5000,
    }
  }

  setColor (color) {
    if (!color) {
      throw new Error('invalid bulb color')
    }

    const defaults = {
      brightness: 100
    }

    const lightSettings = Object.assign(
      {},
      defaults,
      color
    )

    lightSettings.color_temp = lightSettings.colorTemp

    return this.bulb.lighting.setLightState(lightSettings)
  }
}

module.exports = BulbWrapper