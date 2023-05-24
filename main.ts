input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        basic.clearScreen()
        led.plot(1, 2)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        basic.clearScreen()
        led.plot(3, 2)
        basic.pause(100)
    }
})
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        basic.clearScreen()
        led.plot(2, 2)
        basic.pause(2000)
    }
})
