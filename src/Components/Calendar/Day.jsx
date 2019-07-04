import React from 'react';


export default function Day({fullDate, onClick, selected, notice}) {

    const date = fullDate.getDate();
    let className = "day";
    if (selected) {
        className = "day day_select"
    }
    return (
        <button className={className} onClick={onClick.bind(this, date)}>{date}</button>
    );
}