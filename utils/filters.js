const { DateTime } = require('luxon');

module.exports = {
  dateToISO: function (date) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
      includeOffset: false,
      suppressMilliseconds: true,
    });
  },
};
