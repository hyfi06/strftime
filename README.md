# @hyfi06/strftime

Convert datetime to string with a format template and locales.

## Install

```bash
npm install --save @hyfi06/strftime
```

## Functions

| Function | Return type | Brief description |
| -------- | ----------- | ----------------- |
| [zeroFiller](#zerofillernum-len) | `string` | Return a number as string with the minimal length given and fill whit leading zeros. |
| [strftime](#strftimeformat-locales-directives) | `string` | Return datetime as string with the given format and locale identifier. |

---

### zeroFiller(num, len)

Given a number and a length, return the number as string with the necessary leading zeros to reach the given length. If length is less that the digits of number, return the number as string.

```js
zeroFiller(1, 4); // return '0001'
zeroFiller(1000, 1); // return '1000'
```

#### Parameters

| Name | Type      | Description    |
| ---- | --------- | -------------- |
| num  | `number`  | Input number   |
| len  | `Integer` | Minimum length |

#### Returns

`String` - Number as string with leading zeros.

---

### strftime(format, locales, directives)

Add `strftime` method to Date type. Return date as string with given format. Allow you chose the locales names of month and weekday.

```js
var date = new Date(1998, 8, 16, 21, 30, 0);
strftime(date, '%Y/%m/%d'); // return 1998/09/16
strftime(date, '%A', 'es-MX'); // return miércoles
strftime(date, '%B', 'fr'); // return septembre
strftime(date, '%c'); // return Wed, Sep 16, 1998, 09:30:00 PM

var adhocDirectives = [{ pattern: '%r', value: '%I:%M:%S %p' }];
strftime(date, '%r', 'default', adhocDirectives); // return 09:30:00 PM
```

See [Formats codes](#format-codes) and [Custom formats](#custom-formats).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| format | `string` | format template |
| locales | `string` | [locale identifier](https://github.com/TiagoDanin/Locale-Codes#locale-list) |
| directives[].pattern | `string` | directive pattern to search in format template |
| directives[].value | `string` | directive value that replaces the pattern matches in the format template |

#### Returns

`String` - formatted date

---

## License

Copyright (c) 2022 Héctor Olvera Vital
Released under the [MIT License](LICENSE).
