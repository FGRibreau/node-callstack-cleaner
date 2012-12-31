Callstack-cleaner [![Build Status](https://travis-ci.org/FGRibreau/node-callstack-cleaner.png?branch=master)](https://travis-ci.org/FGRibreau/node-callstack-cleaner)
==========
Clean the callstack from error messages

## Getting Started
Install the module with: `npm install callstack-cleaner`

```javascript
var callstack_cleaner = require('callstack-cleaner');

var _err = new Error("plop");
var err = new Error("Redis reply parser error: " + _err.stack); // see `Why` section

err = callstack_cleaner(err); // "Redis reply parser error: Error: plop"
```

## Why ??
node_redis emit parser error in a weird way:
```javascript
// https://github.com/mranney/node_redis/blob/c3ea30ebea7b9eddba3534fcd357e3ec04fd9683/index.js#L267

this.reply_parser.on("error", function (err) {
    self.emit("error", new Error("Redis reply parser error: " + err.stack));
});
```

Callstack-cleaner remove the callstack from the emitted `error.message`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
### v0.1.0
Initial version.

## License
Copyright (c) 2012 Francois-Guillaume Ribreau <npm@fgribreau.com> (http://fgribreau.com)
Licensed under the MIT license.
