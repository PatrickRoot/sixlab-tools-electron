import React, {Component} from 'react';
import {Calendar} from 'antd';

class MyCalendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            base: "14500",
            sbase: "17817",
            gbase: "17817",
            bt: "700",
            percent: "15"
        };
    }

    render() {
        return (
            <div>
                <Calendar />
            </div>
        );
    }
}

export default MyCalendar;
