import React, {Component, Fragment} from 'react';
import DatePick from './Components/Calendar/DatePick';
import Popup from './Components/Popup';
import './index.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            title: "Календарь событий",
            className: "popup"
        }
    }

    handleDayClick = (newDay) => {
        const {selectedDate} = this.state;

        this.setState({
            selectedDate: new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                newDay
            ),
            className: "popup active"
        })
    };

    handleCancelClick = () => {
        this.setState({
            className: "popup"
        })
    };

    handleSubmitClick = () => {
        
    };

    render() {
        const {selectedDate, title, className} = this.state;
        return (
            <Fragment>
                <DatePick title={title} fullDate={selectedDate} onDayClick={this.handleDayClick}/>
                <Popup
                    title={title}
                    className={className}
                    fullDate={selectedDate}
                    onCancelClick={this.handleCancelClick}
                    onSubmitClick = {this.handleSubmitClick()}/>
            </Fragment>
        );
    }

}

export default App;