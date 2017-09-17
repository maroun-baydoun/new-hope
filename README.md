# new-hope
### Esperanto tokenizer written in TypeScript

----
##### Usage

```ts
import {split} from "./splitter";
import {tokenize} from "./tokenizer";

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
