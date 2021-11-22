input.onButtonPressed(Button.A, function () {
    basic.showNumber(Grape__Strawberry__Count)
})
input.onButtonPressed(Button.AB, function () {
    Grape__Strawberry__Count = 1
    Peach__Wild_Berry__Count = 1
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "PEACH") {
        if (Grape__Strawberry__Count == 1) {
            Grape__Strawberry__Count += -1
            basic.showNumber(Grape__Strawberry__Count)
        }
        if (Grape__Strawberry == true) {
            Grape__Strawberry = false
        } else if (Grape__Strawberry == false) {
            Grape__Strawberry = true
        }
    }
    if (receivedString == "MANGO") {
        if (Peach__Wild_Berry__Count == 1) {
            Peach__Wild_Berry__Count += -1
            basic.showNumber(Peach__Wild_Berry__Count)
        }
        if (Peach__Wild_Berry == true) {
            Peach__Wild_Berry = false
        } else if (Peach__Wild_Berry == false) {
            Peach__Wild_Berry = true
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Peach__Wild_Berry__Count)
})
let Peach__Wild_Berry = false
let Grape__Strawberry = false
let Peach__Wild_Berry__Count = 0
let Grape__Strawberry__Count = 0
basic.showIcon(IconNames.Rabbit)
radio.setGroup(69)
Grape__Strawberry__Count = 1
Peach__Wild_Berry__Count = 1
