import React from 'react';
import { startOfWeek, parse, addDays } from 'date-fns/esm';

function CalendarDate(props) {
  const { day, week, year } = props;

  const getCalendarDate = () => {
    const date = startOfWeek(parse(`${year}-${week}`, 'Y-w', new Date()));

    return addDays(date, day).getDate();
  };
  return <td>{getCalendarDate()}</td>;
}

export default CalendarDate;
