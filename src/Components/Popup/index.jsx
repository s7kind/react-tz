import React, {Component} from 'react';

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

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            title: "Внесите свою заметку на дату:",
            placeholder: "Ваша заметка"
        }
    }

    render() {
        const title = this.state.title;
        const {fullDate, className, onCancelClick, onSubmitClick} = this.props;
        const dateNumber = fullDate.getDate();
        const monthNumber = fullDate.getMonth();
        const yearNumber = fullDate.getFullYear();
        const monthName = getMonthName(monthNumber);
        return (
            <div className={className}>
                <div className="popup_wrap">
                    <h3>{title} {dateNumber} {monthName} {yearNumber}</h3>
                    <input type="text" placeholder={this.state.placeholder}/>
                    <div className="buttons">
                        <button className="save" onClick={onSubmitClick}>Сохранить</button>
                        <button className="cancel" onClick={onCancelClick}>Отменить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;