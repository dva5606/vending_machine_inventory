input.onButtonPressed(Button.A, function () {
    basic.showNumber(PEACH_COUNT)
})
input.onButtonPressed(Button.AB, function () {
    PEACH_COUNT = 1
    MANGO_COUNT = 1
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "PEACH") {
        if (PEACH_COUNT == 1) {
            PEACH_COUNT += -1
            basic.showNumber(PEACH_COUNT)
        }
        if (PEACH == true) {
            PEACH = false
        } else if (PEACH == false) {
            PEACH = true
        }
    }
    if (receivedString == "MANGO") {
        if (MANGO_COUNT == 1) {
            MANGO_COUNT += -1
            basic.showNumber(MANGO_COUNT)
        }
        if (MANGO == true) {
            MANGO = false
        } else if (MANGO == false) {
            MANGO = true
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MANGO_COUNT)
})
let MANGO = false
let PEACH = false
let MANGO_COUNT = 0
let PEACH_COUNT = 0
basic.showIcon(IconNames.Rabbit)
radio.setGroup(69)
PEACH_COUNT = 1
MANGO_COUNT = 1
