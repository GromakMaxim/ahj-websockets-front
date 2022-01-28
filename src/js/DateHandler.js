import {format} from 'date-fns'

export default class DateHandler {
    constructor() {
    }

    static getCurrentDate(formatType) {
        return format(new Date(), formatType);
    }
}
