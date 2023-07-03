<p align="center">
  <img src="https://raw.githubusercontent.com/anselmodev/number-abbreviation/master/abbr-logo.jpg" alt="A simple number abbreviation tool" title="A simple number abbreviation tool" width="200" />
</p>

<h1 align="center">number-abbreviation
</h1>
<p align="center">A simple number abbreviation tool.</p>

## Features

- Zero dependencies.
- Works with any NodeJs projects.
- Simple usage.

<br>

## Install

#### Install with NPM or YARN:

```shell script
$ npm i number-abbreviation
```

or

```shell script
$ yarn add number-abbreviation
```

#### Methods

- [`numberAbbr(value, [options])`](#abbreviate-a-number)

<br />

## Abbreviate a number (simple usage)


```js
import { numberAbbr } from 'number-abbreviation';

const thousandNumber = numberAbbr(1234);
// return '1.2K'

const millionNumber = numberAbbr(7654321);
// return '7.7M'

const billionNumber = numberAbbr(9356412313);
// return '9.4B'

const trillionNumber = numberAbbr(5767473333233);
// return '5.8T'

```

## Abbreviate a number [options] - decimals


```js
import { numberAbbr } from 'number-abbreviation';

const millionNumber = numberAbbr(7654321, { decimals: 2 });
// return '7.65M'

```
## Abbreviate a number [options] - suffixes and suffixSpace


```js
import { numberAbbr } from 'number-abbreviation';

const mySuffixes = ["Mil", "Milhões", "Bilhões", "Trilhões"];

const millionNumber = numberAbbr(
    7654321, 
    { 
      suffixes: mySufixes, 
      suffixSpace: true 
    }
  );
// return '7.6 Milhões'

```

<br />

## Parameters

#### `numberAbbr(value: number)`

The <b>"number"</b> to abbreviation. <br><br>

#### `numberAbbr(value: number, { decimals: number })`

The <b>"number"</b> of truncated decimals. <br>
Default is: <b>{ decimals: 1 }</b>. <br><br>

#### `numberAbbr(value: number, { suffixes: string[] })`

An <b>"array"</b> of strings. <br>
It is mandatory to define the value of the 4 indices. <br>
Default is: <b>{ suffixes: [ 'K', 'M', 'B', 'T' ] }</b>. <br><br>

#### `numberAbbr(value: number, { suffixSpace: boolean })`

If true, sets a space between the suffix and abbreviated number.<br>
Default is: <b>{ suffixSpace: false }</b>. <br><br>


## Autor

| [<img src="https://avatars2.githubusercontent.com/u/14978874?v=3&s=115"><br><sub>@anselmodev</sub>](https://github.com/anselmodev) |
| :--------------------------------------------------------------------------------------------------------------------------------: |

