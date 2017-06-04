const expect = require('expect');
const dateparser = require('./dateparser');




it('should parse date from number expression', () => {

  var res = dateparser.parseDate("1450137600");
  expect({"unix": 1450137600, "natural": "December 15, 2015" }).toEqual(res);

  var res = dateparser.parseDate("555555");
  expect({"unix": 555555, "natural": "January 7, 1970" }).toEqual(res);

});

/*
it('should parse date from date string expression', () => {

  var res = dateparser.parseDate("january 2,2021");
  expect({"unix":1609459200,"natural":"January 2, 2021"}).toEqual(res);

  var res = dateparser.parseDate("2021-12-13");
  expect({"unix":1639353600,"natural":"December 13, 2021"}).toEqual(res);

});*/