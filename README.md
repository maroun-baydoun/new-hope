![new-hope logo](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjwh
RE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cu
dzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjIwMHB4
IiBoZWlnaHQ9IjY3cHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIw
MDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNw
YWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2Rk
O3N0cm9rZS1saW5lam9pbjpyb3VuZDsiPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4xOTE0
MjYsMCwwLDAuMDQ3ODM4LDY2LjAzMiwtMC4xODkyNzgpIj4KICAgICAgICA8cmVjdCB4PSIwIiB5
PSIwIiB3aWR0aD0iNzAwIiBoZWlnaHQ9IjE0MDAiIHN0eWxlPSJmaWxsOndoaXRlOyIvPgogICAg
PC9nPgogICAgPGc+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wOTQzODk0LDAsMCww
LjA0Nzc2MDMsMC4wNTU0MTQ0LC0wLjA2NzMzMzYpIj4KICAgICAgICAgICAgPHJlY3QgeD0iMCIg
eT0iMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSIxNDAwIiBzdHlsZT0iZmlsbDpyZ2IoMCwxNTMsMCk7
Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMjI4OTAxLDAs
MCwwLjIyODkwMSw0LjM0NzgzLDQuNzg3NzUpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEyNSwx
NC4xODFMMTUyLjI1Nyw5OS4xODlMMjQxLjUzOCw5OC44MzlMMTY5LjEwMywxNTEuMDI3TDE5Ny4w
MjQsMjM1LjgxOUwxMjUsMTgzLjA2Nkw1Mi45NzYsMjM1LjgxOUw4MC44OTcsMTUxLjAyN0w4LjQ2
Miw5OC44MzlMOTcuNzQzLDk5LjE4OEwxMjUsMTQuMTgxTDEyNSwxNC4xODFaIiBzdHlsZT0iZmls
bDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6cmdiKDUxLDUxLDUxKTtzdHJva2Utd2lk
dGg6OHB4OyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4
KDEsMCwwLDEsLTcxMy40NzIsLTI4Ny43NDEpIj4KICAgICAgICA8dGV4dCB4PSI3OTAuMjM4cHgi
IHk9IjMyNy4xODhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbC1Cb2xkTVQnLCAnQXJpYWwn
LCBzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MjRweDtmaWxsOnJnYigwLDE1
MywwKTsiPm5ldy1ob3BlPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4K)

### Esperanto tokenizer written in TypeScript
[![npm version](https://badge.fury.io/js/new-hope.svg)](https://badge.fury.io/js/new-hope)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/maroun-baydoun/new-hope)

----
Give it a try [here](http://www.maroun-baydoun.com/projects/new-hope/).
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
