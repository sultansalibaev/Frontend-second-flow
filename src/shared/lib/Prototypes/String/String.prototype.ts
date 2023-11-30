// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface String {
    format: (format: string, bool?: boolean) => string
    lowerIncludes: (string: string) => boolean
    push_space: () => string
    short: () => string
    maxLength: (length: number) => string
    reverse: (separator?: string, joinChar?: string) => string
}

// eslint-disable-next-line no-extend-native
String.prototype.format = function (format: string, bool = false) {
    // @ts-expect-error
    return new Date(this).format(format, bool)
}
// eslint-disable-next-line no-extend-native
String.prototype.lowerIncludes = function (string) {
    return this.trim().toLowerCase().includes(string.trim().toLowerCase())
}

// @ts-expect-error
// eslint-disable-next-line no-extend-native
String.prototype.push_space = function () {
    const temp_integer = parseInt(this as string)
    return isNaN(temp_integer) ? this : temp_integer.push_space()
}

// eslint-disable-next-line no-extend-native
String.prototype.short = function () {
    return parseInt(this as string).short()
}

// eslint-disable-next-line no-extend-native
String.prototype.maxLength = function (length) {
    if (this.trim().length <= length) return this.trim()
    else return this.trim().slice(0, length) + '...'
    // Crewmate WillThrowTheseHands
}

// eslint-disable-next-line no-extend-native
String.prototype.reverse = function (separator = '', joinChar = '') {
    return this.split(separator).reverse().join(joinChar)
}
