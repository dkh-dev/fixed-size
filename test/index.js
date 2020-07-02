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
test('Fixed size set', t => {
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
test('Fixed size map', t => {
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

// eslint-disable-next-line max-statements
test('Fixed size array', t => {
    const array = new FixedSize.Array(3)

    for (let i = 0; i < 4; i++) {
        array.push(i)
    }

    t.equal(array.toString(), '1,2,3')

    array.splice(1, 1)
    t.equal(array.toString(), '1,3')

    array.push(4)
    t.equal(array.toString(), '1,3,4')

    array.push(1)
    t.equal(array.toString(), '3,4,1')

    array.push(2, 3)
    t.equal(array.toString(), '1,2,3')

    array.push(4, 5, 6, 7)
    t.equal(array.toString(), '5,6,7')

    array.unshift(1, 2)
    t.equal(array.toString(), '1,2,5')

    array.unshift(4, 5, 6, 7)
    t.equal(array.toString(), '4,5,6')

    t.end()
})
