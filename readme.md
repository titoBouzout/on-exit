# on exit

Calls functions before node exits. A node exit handler.

## Installation

`npm install @titodp/on-exit`

## Usage

You may return a promise to hold the process.

```js
import onExit from '@titodp/on-exit'

onExit(() => console.log('imma go soon'))

onExit(() => console.log('bye cruel world'))

onExit(() => new Promise(resolve => setTimeout(resolve, 1000)))
```

## Author

- Tito Bouzout https://github.com/titoBouzout

## URLs

- https://github.com/titoBouzout/on-exit
- https://www.npmjs.com/package/@titodp/on-exit
