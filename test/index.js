'use strict'

const test = require('tape')

const FixedSize = require('..')


const toString = function () {
    // eslint-disable-next-line no-invalid-this
    return [ ...this.values() ].toString()
}

FixedSize.Set.prototype.toString = toString
FixedSize.Map.prototype.toString = toString

// eslint-disable-next-line max-statements
test('Fixed size sets', t => {
    const set = new FixedSize.Set(3)

    for (let i = 0; i < 4; i++) {
        set.add(i)
    }

    t.equal(set.toString(), '1,2,3')

    set.delete(2)
    t.equal(set.toString(), '1,3')

    set.add(4)
    t.equal(set.toString(), '1,3,4')

    set.add(1)
    t.equal(set.toString(), '3,4,1')

    t.end()
})

// eslint-disable-next-line max-statements
test('Fixed size maps', t => {
    const map = new FixedSize.Map(3)

    for (let i = 0; i < 4; i++) {
        map.set(i, i)
    }

    t.equal(map.toString(), '1,2,3')

    map.delete(2)
    t.equal(map.toString(), '1,3')

    map.set(4, 4)
    t.equal(map.toString(), '1,3,4')

    map.set(1, 1)
    t.equal(map.toString(), '3,4,1')

    t.end()
})
