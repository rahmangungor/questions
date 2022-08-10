//JAVASCRIPT | program that calculates angles in analog clock

const date = new Date()
const systemHour = date.getHours()
const systemMinute = date.getMinutes()

//Utils|find the minimum number function
function minAngle(x, y) {
    return (x < y) ? x : y
}

function calc(hour, minute) {
    //variables
    let hourDeg = (60 * hour + minute) * 0.5
    let minDeg = minute * 6
    let angleValue = Math.abs(hourDeg - minDeg)

    //difference
    angleValue = minAngle(360 - angleValue, angleValue)

    //conditions & results
    if (hour == 12 && minute == 00) {
        return 0
    }
    if (angleValue < 0) {
        return (Math.abs(angleValue) + ' | ' + (360 + angleValue))
    }

    return (angleValue + ' | ' + (360 - angleValue))
}

/**OUTPUT */
console.log(calc(systemHour, systemMinute)) // system hours with angle
console.log(calc(12, 00)) // 0
console.log(calc(12, 30)) // 165 | 195
console.log(calc(14, 46)) // 167 | 193
console.log(calc(11, 58)) //  11 | 349




