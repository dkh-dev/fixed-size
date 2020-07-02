'use strict'

/**
 * Only supports push().
 */
class FixedSizeArray extends Array {
    constructor(maxSize = 4294967296) {
        super()

        if (maxSize < 1) {
            throw Error(`invalid maxSize ${ maxSize }`)
        }

        this.maxSize = maxSize
    }

    push(...items) {
        // delete count
        const count = this.length + items.length - this.maxSize

        if (count > 0) {
            super.splice(0, count)
        }

        const start = items.length - this.maxSize

        super.push(...start > 0 ? items.slice(start) : items)
    }

    unshift(...items) {
        const count = this.length + items.length - this.maxSize

        if (count > 0) {
            super.splice(-count)
        }

        const end = this.maxSize - items.length

        super.unshift(...end < 0 ? items.slice(0, end) : items)
    }
}

module.exports = FixedSizeArray
