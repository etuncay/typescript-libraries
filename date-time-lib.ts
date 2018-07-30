import * as moment from 'moment';
export  class  DateTimeLib {

    static dateSetTime(date:  moment.Moment, time: string): moment.Moment {
        const [hours, minutes] = time.split(':');
        let temp = moment(date.toDate().setHours(Number(hours)));
        temp = moment(temp.toDate().setMinutes(Number(minutes)));
        return temp;
    }

}
