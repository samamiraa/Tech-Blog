const dayjs = require('dayjs');

module.exports = {
    format_date: (date) => {
        if (!(date instanceof Date) || isNaN(date)) {
            return "Invalid date";
        }

        const dateWithoutTime = date.toISOString().replace(/T[\d:]+\.\d+Z/, '');

        return dayjs(dateWithoutTime).format('DD-MM-YYYY');
    },
};