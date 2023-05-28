const { DateTime } = require('luxon');
const util = require('util');

module.exports = {
  dateToFormat: function (date, format) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(String(format));
  },

  abbr: function (fullName) {
    var splitName = fullName.split(' ');
    for (i = 0; i < splitName.length; i++) {
      splitName[i] = splitName[i].charAt(0);
    }
    return splitName.join('');
  },

  abbrFirstName: function (fullName) {
    var splitName = fullName.split(' ');
    if (splitName.length >= 2) {
      for (i = 0; i < splitName.length - 1; i++) {
        splitName[i] = splitName[i].charAt(0) + '.';
      }
    }
    return splitName.join(' ');
  },

  cleanLink: function (link) {
    const str = link;
    const result = str.replace(/^https:\/\/www\./i, '');
    return result;
  },

  console: function (value) {
    return util.inspect(value);
  },
};
