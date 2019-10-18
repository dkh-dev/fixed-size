# FixedSize

_Fixed-size sets and maps_

## Installation

````bash
npm install @dkh-dev/fixed-size
````

## Examples

Example 1: FixedSize.Set

````javascript
'use strict'

const FixedSize = require('@dkh-dev/fixed-size')
// or
// const FixedSizeSet = require('@dkh-dev/fixed-size/set')

const set = new FixedSize.Set(3)
// or
// const set = new FixedSizeSet(3)

for (let i = 0; i < 4; i++) {
    set.add(i)
}

console.log(set)
// => FixedSizeSet [Set] { 1, 2, 3, maxSize: 3 }
````

Example 2: FixedSize.Map

````typescript
'use strict'

const FixedSize = require('@dkh-dev/fixed-size')
// or
// const FixedSizeMap = require('@dkh-dev/fixed-size/map')

const map = new FixedSize.Map(3)
// or
// const map = new FixedSizeMap(3)

for (let i = 0; i < 4; i++) {
    map.set(i, i)
}

console.log(map)
// => FixedSizeMap [Map] { 1 => 1, 2 => 2, 3 => 3, maxSize: 3 }
````
