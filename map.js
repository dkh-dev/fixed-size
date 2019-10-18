'use strict'

class FixedSizeMap extends Map {
    constructor(maxSize = 9007199254740991) {
        super()

        if (maxSize < 1) {
            throw Error(`invalid maxSize ${ maxSize }`)
        }

        this.maxSize = maxSize
    }

    set(key, value) {
        if (this.has(key)) {
            // This resets the age of the entry
            this.delete(key)
        } else if (this.size === this.maxSize) {
            // The oldest key in the map
            const { value } = this.keys().next()

            this.delete(value)
        }

        super.set(key, value)
    }
}

module.exports = FixedSizeMap
