const { strftime } = require("../dist/index");

process.env.TZ = "America/Mexico_City";
const date = new Date("2022-03-11 02:02:02.02 GMT-0600");

const formats = [
  "%a",
  "%A",
  "%w",
  "%d",
  "%b",
  "%B",
  "%m",
  "%y",
  "%Y",
  "%H",
  "%I",
  "%p",
  "%M",
  "%S",
  "%f",
  "%z",
  "%Z",
  "%c",
  "%x",
  "%X",
];

formats.forEach((format) => {
  console.log(`${format}: ${strftime(date, format, "es-MX")}`);
});
