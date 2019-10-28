'use strict'

class FixedSizeMap extends Map {
    constructor(maxSize = 4294967296) {
        super()

        if (maxSize < 1) {
            throw Error(`invalid maxSize ${ maxSize }`)
        }

        this.maxSize = maxSize
    }

    set(key, value) {
        if (super.has(key)) {
            // Resets the age of the entry
            super.delete(key)
        } else if (super.size === this.maxSize) {
            // The oldest key in the map
            const { value } = super.keys().next()

            super.delete(value)
        }

        super.set(key, value)
    }
}

module.exports = FixedSizeMap
