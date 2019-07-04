import React, {Component, Fragment} from 'react';
import Day from './Day';
import './index.css';

const weekDays = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Субботу",
    "Воскресенье"
];


function getWeeksForThisMonth(month, year) {
    const firstOfMonth = new Date(year, month, 1);
    const firstDay = firstOfMonth.getDay();
    const weeks = [[]];
    const weekLenght = 7;

    let currentWeek = weeks[0];
    let currentDate = firstOfMonth;

    for (let i = 0; i < firstDay; i++) {
        currentWeek.push(null);
    }

    while (currentDate.getMonth() === month) {
        if (currentWeek.length === weekLenght) {
            currentWeek = [];
            weeks.push(currentWeek);
        }
        currentWeek.push(currentDate);
        currentDate = new Date(year, month, currentDate.getDate() + 1);
    }

    while (currentWeek.length < 7) {
        currentWeek.push(null);
    }

    return weeks;
}

function Weekday({label, title}) {
    return (
        <div aria-label={label} className="calendar_days--item">
            {title}
        </div>
    );
}

function abbr(weekDay) {
    return weekDay.substring(0, 2);
}


class Month extends Component {
    constructor(props) {
        super(props);
        this.renderWeek = this.renderWeek.bind(this);
    }


    render() {
        const {month, year} = this.props;
        const calendarWeekDays = weekDays.map(weekDay => {
            return (
                <Weekday
                    key={weekDay}
                    label={weekDay}
                    title={abbr(weekDay)}
                />
            )
        });
        const weeks = getWeeksForThisMonth(month, year);
        const calendarWeek = weeks.map((week, index) => {
            return (
                <div role="row" className="week" key={index}>
                    {week.map(this.renderWeek)}
                </div>
            );
        });


        return (
            <Fragment>
                <div className="calendar_days">{calendarWeekDays}</div>
                {calendarWeek}
            </Fragment>
        );
    }

    renderWeek(fullDate, dayIndex) {
        const {onDayClick} = this.props;
        if (fullDate === null) {
            return <button className="day">{' '}</button>
        }
        let date = fullDate.getDate();
        let currentDate = fullDate.getDate();
        return (
            <Day key={dayIndex}
                 fullDate={fullDate}
                 onClick={onDayClick}
                 selected={date === this.props.date}
                 current={currentDate === this.props.currentDate}
            />
        );
    };
}

export default Month;