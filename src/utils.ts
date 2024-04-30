export function capitalizeFirstLetter(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export function getCurrentWeekDay() {
    let date = new Date()//"2023-05-07")
    return [6, 0, 1, 2, 3, 4, 5][date.getDay()]; // shift from sunday to monday
}

function getDiff(now: Date, open: string) : string {
    let openDate: Date = new Date(now.getFullYear(), now.getUTCMonth(), now.getUTCDate(), parseInt(open.substring(0, 3)), parseInt(open.substring(4, 6)))
    let diffMin: number = Math.round((openDate.getTime() - now.getTime()) / 1000 / 60)
    let diffHours = Math.round(diffMin / 60)
    return diffHours > 0 ? `opens in ${diffHours} h` : `opens in ${diffMin} min`
}

export function getStatus(openingHours: string[]) {
    // find correct day
    // check if current time in opening hours
    let day = openingHours[getCurrentWeekDay()]
    if (day) {
        let open = day.substring(0, 5)
        let closed = day.substring(6, 11)
        // find current time
        const now: Date = new Date()
        let time = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes()}`

        if (time < open) {
            return {
                message: getDiff(now, open),
                style: {
                    color: "yellow"
                }
            }
        } else if (time > closed) {
            return {
                message: "already closed",
                style: {
                    color: "orangered"
                }
            }
        } else {
            // TODO open for another 1 hour max
            return {
                message: "open",
                style: {
                    color: "lightgreen"
                }
            }
        }
    } else {
        return {
            message: "closed",
            style: {
                color: "red"
            }
        }
    }
}