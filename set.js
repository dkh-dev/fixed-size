'use strict'

class FixedSizeSet extends Set {
    constructor(maxSize = 4294967296) {
        super()

        if (maxSize < 1) {
            throw Error(`invalid maxSize ${ maxSize }`)
        }

        this.maxSize = maxSize
    }

    add(value) {
        if (super.has(value)) {
            // Resets the age of the value
            super.delete(value)
        } else if (super.size === this.maxSize) {
            // The oldest value in the set
            const { value } = super.values().next()

            super.delete(value)
        }

        super.add(value)
    }
}

module.exports = FixedSizeSet
