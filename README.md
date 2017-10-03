# new-hope
[![npm version](https://badge.fury.io/js/new-hope.svg)](https://badge.fury.io/js/new-hope)  
### Esperanto tokenizer written in TypeScript
----
Give it a try [here](http://dev.maroun-baydoun.com/new-hope/).
##### Esperanto? Is that Spanish?
Esperanto is a constructed language created by L. L. Zamenhof in 1887. Find out more [here](https://en.wikipedia.org/wiki/Esperanto) and check out the great [Duolingo Esperanto Course](https://www.duolingo.com/course/eo/en/Learn-Esperanto-Online).

##### Usage

```ts
import {split, tokenize} from "./new-hope";

const words = split("Mi manĝas pomon.");
>>> ["mi", "manĝas", "pomon"]

const tokens = tokenize(words);
>>>
[
   {
      value:'mi',
      stem:'mi',
      partOfSpeech:'pronoun',
      case:'nominative'
   },
   {
      value:'manĝas',
      stem:'manĝi',
      tense:'present',
      partOfSpeech:'verb'
   },
   {
      value:'pomon',
      stem:'pomo',
      case:'accusative',
      number:'singular',
      partOfSpeech:'noun'
   }
]

```
