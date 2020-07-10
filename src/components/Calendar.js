// Calendar Object Literal
export const calendar = {
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',
    now: new Date(),
    // Get todays month expressed as a number i.e. 0=January, 1=February...
    getTodaysMonth: function() {
        return this.now.getMonth();
    },
    // Get last month expressed as a number i.e. 3-1=2=March...
    getTodaysOneMonthBefore: function() {
        return this.getTodaysMonth() - 1;
    },
    // Convert months expressed as numbers to proper month name
    todaysMonth: function(monthNum) {
        let month;
        switch (monthNum) {
            case 0:
                month = this.january;
                break;
            case 1: 
                month = this.february;
                break;
            case 2:
                month = this.march;
                break;
            case 3: 
                month = this.april;
                break;
            case 4:
                month = this.may;
                break;
            case 5:
                month = this.june;
                break;
            case 6:
                month = this.july;
                break;
            case 7:
                month = this.august;
                break;
            case 8:
                month = this.september;
                break;
            case 9:
                month = this.october;
                break;
            case 10:
                month = this.november;
                break;
                default: 
            case 11:
                month = this.december
        }
        return month;
    },
    // Days in the month
    daysInMonth: function() {
        return new Date(this.now.getFullYear(), calendar.getTodaysMonth() + 1, 0).getDate();
    },
    // Todays day integer
    todaysDate: function() {
        return this.now.getDate();
    },
    // Days left in the month
    daysLeftInMonth: function() {
        return this.daysInMonth() - this.todaysDate();
    }
};