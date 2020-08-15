let strip = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB)
basic.forever(function () {
    for (let strip = 0; strip <= 3; strip++) {
        let index = 0
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(200)
    }
    for (let index = 0; index <= 3; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(200)
    }
    for (let index = 0; index <= 3; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        basic.pause(200)
    }
})
