'use strict'

class FixedSizeSet extends Set {
    constructor(maxSize = 9007199254740991) {
        super()

        if (maxSize < 1) {
            throw Error(`invalid maxSize ${ maxSize }`)
        }

        this.maxSize = maxSize
    }

    add(value) {
        if (this.has(value)) {
            // This resets the age of the value
            this.delete(value)
        } else if (this.size === this.maxSize) {
            // The oldest value in the set
            const { value } = this.values().next()

            this.delete(value)
        }

        super.add(value)
    }
}

module.exports = FixedSizeSet
