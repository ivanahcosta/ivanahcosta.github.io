const { DateTime } = require('luxon');

module.exports = {
  dateToFormat: function (date, format) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(String(format));
  },

  cleanLink: function (link) {
    const str = link;
    const result = str.replace(/^https:\/\/www\./i, '');
    return result;
  },
};
