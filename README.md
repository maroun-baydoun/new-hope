# new-hope
[![npm version](https://badge.fury.io/js/new-hope.svg)](https://badge.fury.io/js/new-hope)  
### Esperanto tokenizer written in TypeScript
----
Give it a try [here](http://dev.maroun-baydoun.com/new-hope/).
##### Esperanto? Is that Spanish?
Esperanto is a constructed language created by L. L. Zamenhof in 1887. Find out more [here](https://en.wikipedia.org/wiki/Esperanto) and check out the great [Duolingo Esperanto Course](https://www.duolingo.com/course/eo/en/Learn-Esperanto-Online).

----
#### Usage

###### ES6/TypeScript style import

```js
import {split, tokenize} from "new-hope";

const words = split("Mi parolas Esperanton.");
const tokens = tokenize(words);
```

###### Node.js style import

```js
const newHope = require("new-hope");

const words = newHope.split("Mi parolas Esperanton.");
const tokens = newHope.tokenize(words);
```

###### AMD style import

```js
require(["new-hope"], (newHope) => {
  const words = newHope.split("Mi parolas Esperanton.");
  const tokens = newHope.tokenize(words);
});
```
