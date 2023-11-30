// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Number {
    minmax: (min: number, max: number) => number
    push_space: () => string
    getFixedOne: () => any
    short: (...without: number[]) => string
}

// @ts-expect-error
// eslint-disable-next-line no-extend-native
Number.prototype.minmax = function (min, max) {
    return this < min ? min : this > max ? max : this
}

// eslint-disable-next-line no-extend-native
Number.prototype.push_space = function () {
    return (
        this.toString()
            .reverse()
            .match(/.{1,3}/g) as RegExpMatchArray
    ).join(' ')
        .reverse()
}

const divider_obj = {
    1_000_000_000: ' млрд.',
    1_000_000: ' млн.',
    1: ''
}

function getShortDivider (num: number, ...without: number[]) {
    const result = [
        1000000000,
        1000000,
        1
    ]
        .filter(
            divider => !without.includes(divider)
        )
        .find(
            divider => num >= divider
        ) ?? 1
    console.log('some_divider', result)
    return result
}

// eslint-disable-next-line no-extend-native
Number.prototype.getFixedOne = function () {
    // @ts-expect-error
    return parseInt(String((this) * 10)) / 10
}

// eslint-disable-next-line no-extend-native
Number.prototype.short = function (...without: number[]) {
    const some_divider = getShortDivider(+this, ...without)
    // @ts-expect-error
    if (divider_obj[some_divider] === '') {
        return this.push_space()
    } else {
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        return (this / some_divider).getFixedOne() + divider_obj[some_divider]
    }
}
