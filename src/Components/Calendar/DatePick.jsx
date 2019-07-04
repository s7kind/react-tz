import React, {Component} from 'react';
import Month from './Month';

const month = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

function getMonthName(index) {
    return month[index];
}

class DatePick extends Component {
    render() {
        const {fullDate, onDayClick} = this.props;
        const dateNumber = fullDate.getDate();
        const monthNumber = fullDate.getMonth();
        const yearNumber = fullDate.getFullYear();
        const monthName = getMonthName(monthNumber);

        return (
            <div className="calendar_wrap">
                <h3>{this.props.title}</h3>
                <div className="date_picker">
                    <div className="date_picker--title">{monthName}</div>
                    <Month
                        date={dateNumber}
                        month={monthNumber}
                        year={yearNumber}
                        onDayClick={onDayClick}
                    />
                </div>
            </div>
        )
    }
}

export default DatePick;