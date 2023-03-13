let Item = false
music.setVolume(150)
music.playTone(131, music.beat(BeatFraction.Whole))
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
music.playTone(139, music.beat(BeatFraction.Whole))
basic.clearScreen()
basic.showIcon(IconNames.SmallDiamond)
basic.pause(100)
music.playTone(147, music.beat(BeatFraction.Whole))
basic.clearScreen()
basic.showIcon(IconNames.Diamond)
basic.pause(100)
music.playTone(156, music.beat(BeatFraction.Whole))
basic.clearScreen()
basic.showLeds(`
    . # . # .
    # . . . #
    . . . . .
    # . . . #
    . # . # .
    `)
basic.pause(100)
music.playTone(165, music.beat(BeatFraction.Whole))
basic.clearScreen()
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
basic.pause(100)
music.playTone(175, music.beat(BeatFraction.Whole))
basic.clearScreen()
basic.pause(100)
music.setVolume(60)
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 3721, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.showString("ON")
basic.pause(1000)
music.setVolume(255)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) >= 10 && maqueen.Ultrasonic(PingUnit.Centimeters) <= 12 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        Item = Math.randomBoolean()
        if (Item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 155)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
        if (Item == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 155)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) >= 8 && maqueen.Ultrasonic(PingUnit.Centimeters) < 10 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        Item = Math.randomBoolean()
        if (Item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 55)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
        if (Item == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 55)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 8 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        Item = Math.randomBoolean()
        if (Item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
        if (Item == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
basic.forever(function () {
    Item = Math.randomBoolean()
    while (Item == true) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        music.setVolume(60)
        music.playTone(587, music.beat(BeatFraction.Whole))
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
    while (Item == false) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        music.setVolume(60)
        music.playTone(587, music.beat(BeatFraction.Whole))
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
basic.forever(function () {
    Item = Math.randomBoolean()
    while (Item != (true || false)) {
        music.setVolume(50)
        music.playMelody("C5 A - B E - G B ", 120)
    }
})
