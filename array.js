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

    push(value) {
        if (this.length === this.maxSize) {
            // The oldest value in the array
            super.shift()
        }

        super.push(value)
    }
}

module.exports = FixedSizeArray
