let Item = false
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        Item = Math.randomBoolean()
        if (Item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
        if (Item == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        Item = Math.randomBoolean()
        if (Item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
        if (Item == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 7 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        Item = Math.randomBoolean()
        if (Item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
        if (Item == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
