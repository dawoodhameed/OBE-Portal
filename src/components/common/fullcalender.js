import React, { Component } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css"
// import '../../assets/plugins/fullcalendar/fullcalendar.min.css';

const eventsd = [
    {
        title: 'Birthday Party',
        start: '2020-08-01',
        className: 'bg-info'
    }, {
        title: 'Conference',
        start: '2020-08-05',
        end: '2018-08-08',
        className: 'bg-warning'
    }, {
        title: 'Meeting',
        start: '2020-08-09T12:30:00',
        allDay: true, // will make the time show
        className: 'bg-success',
    }
]
const headerdata = {
    left: 'title',
    center: '',
    // right: 'month, agendaWeek, agendaDay, prev, next'
    right: ''
}
class Fullcalender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: "",
        }
    }
    render() {
        return (
            <div id="calender">
                <FullCalendar
                    id="calendar"
                    header={headerdata}
                    defaultDate={new Date()}
                    navLinks={true}
                    editable={true}
                    // droppable={true}
                    eventLimit={true} // allow "more" link when too many events
                    // selectable={true}
                    events={eventsd}
                />
            </div>
        );
    }
}

export default Fullcalender;
