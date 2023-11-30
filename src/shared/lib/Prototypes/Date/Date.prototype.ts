// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Date {
    getWeekNumber: () => number
    format: (format: string, bool?: boolean) => string
    plus: (type: string, count: number) => Date
    minus: (type: string, count: number) => Date
}

const dateTypes = {
    hour: 'etHours',
    date: 'etDate',
    'week-day': 'etDay',
    month: 'etMonth',
    year: 'etFullYear'
}

// eslint-disable-next-line no-extend-native
Date.prototype.plus = function (type, count) {
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    this['s' + dateTypes[type]](this['g' + dateTypes[type]]() + count)
    return this
}
// eslint-disable-next-line no-extend-native
Date.prototype.minus = function (type, count) {
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    this['s' + dateTypes[type]](this['g' + dateTypes[type]]() - count)
    return this
}

enum dateFormats {
    Y = 'getFullYear',
    m = 'getMonth',
    d = 'getDate',
    h = 'getHours',
    i = 'getMinutes',
    s = 'getSeconds',
    w = 'getDay'
}
const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
]
const weeks = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
]

function getFormatDate (date: number) {
    if (date < 10) {
        return '0' + date.toString()
    }
    return date
}

// eslint-disable-next-line no-extend-native
Date.prototype.format = function (format: string, bool: boolean = false) {
    return Object.keys(dateFormats).reduce((oldFormat: string, dateFormat) => {
        if (oldFormat.includes(dateFormat)) {
            let plus = 0

            if (dateFormat === 'm') {
                plus = 1
            }

            let formatDate

            if (dateFormat === 'w') {
                formatDate = this[dateFormats[dateFormat]]()
                if (formatDate === 0) {
                    formatDate = 7
                }
                formatDate = bool ? weeks[this[dateFormats[dateFormat]]()] : formatDate
            } else {
                // @ts-expect-error
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                const format_view = bool && dateFormat === 'm' ? months[this[dateFormats[dateFormat]]()] : plus + this[dateFormats[dateFormat]]()
                formatDate = format_view
            }

            return oldFormat.replace(dateFormat, getFormatDate(formatDate) as string)
        } else {
            return oldFormat
        }
    }, format)
}
