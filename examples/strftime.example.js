const { strftime } = require("../dist/index");

const date = new Date(1998, 8, 16, 21, 30, 0);

// 1998/09/16
console.log(strftime(date, "%Y/%m/%d"));

// miércoles
console.log(strftime(date, "%A", "es-MX"));

// septembre
console.log(strftime(date, "%B", "fr"));

// Wed, Sep 16, 1998, 09:30:00 PM
console.log(strftime(date, "%c"));

const adhocDirectives = [
  {
    pattern: "%r",
    value: "%I:%M:%S %p",
  },
];

// 09:30:00 PM
console.log(strftime(date, "%r", "default", adhocDirectives));
