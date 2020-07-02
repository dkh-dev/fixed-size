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

    push(...values) {
        super.push(...values)

        // delete count
        const count = this.length - this.maxSize

        if (count > 0) {
            super.splice(0, count)
        }
    }

    unshift(...values) {
        super.unshift(...values)

        const count = this.length - this.maxSize

        if (count > 0) {
            super.splice(-count)
        }
    }
}

module.exports = FixedSizeArray
