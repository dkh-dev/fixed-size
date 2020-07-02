'use strict'

/**
 * Only supports push().
 */
class FixedSizeArray extends Array {
    constructor(maxSize = 0) {
        super()

        this.maxSize = maxSize
    }

    push(...items) {
        if (this.maxSize === 0) {
            return super.push(...items)
        }

        // delete count
        const count = this.length + items.length - this.maxSize

        if (count > 0) {
            super.splice(0, count)
        }

        const start = items.length - this.maxSize

        return super.push(...start > 0 ? items.slice(start) : items)
    }

    unshift(...items) {
        if (this.maxSize === 0) {
            return super.unshift(...items)
        }

        const count = this.length + items.length - this.maxSize

        if (count > 0) {
            super.splice(-count)
        }

        const end = this.maxSize - items.length

        return super.unshift(...end < 0 ? items.slice(0, end) : items)
    }
}

module.exports = FixedSizeArray
