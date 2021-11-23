input.onButtonPressed(Button.A, function () {
    basic.showNumber(Cherry__Watermelon__Count)
})
input.onButtonPressed(Button.AB, function () {
    Cherry__Watermelon__Count = 2
    Peach__Wild_Berry__Count = 2
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "PEACH") {
        if (Cherry__Watermelon__Count == 1) {
            Cherry__Watermelon__Count += -1
            basic.showNumber(Cherry__Watermelon__Count)
        }
        if (Cherry__Watermelon == true) {
            Cherry__Watermelon = false
        } else if (Cherry__Watermelon == false) {
            Cherry__Watermelon = true
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
let Cherry__Watermelon = false
let Peach__Wild_Berry__Count = 0
let Cherry__Watermelon__Count = 0
basic.showIcon(IconNames.Rabbit)
radio.setGroup(69)
Cherry__Watermelon__Count = 2
Peach__Wild_Berry__Count = 2
