import React from 'react';
import PropTypes from 'prop-types';
import CalendarDate from './CalendarDate';
import { eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns/esm';

function Week(props) {
  const getWeekDays = ({ sunday, date, currentDate }) =>
    eachDayOfInterval({
      start: startOfWeek(sunday),
      end: endOfWeek(sunday),
    }).map((day) => (
      <CalendarDate key={day} day={day} date={date} currentDate={currentDate} />
    ));

  return <tr>{getWeekDays(props)}</tr>;
}
Week.propTypes = {
  sunday: PropTypes.instanceOf(Date).isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  date: PropTypes.instanceOf(Date),
};

Week.defaultProps = {
  currentDate: new Date(),
};

export default Week;
