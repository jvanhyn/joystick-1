joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.A, function () {
	
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    basic.showArrow(ArrowNames.North)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    basic.showArrow(ArrowNames.West)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
joystickbit.initJoystickBit()
basic.forever(function () {
	
})
