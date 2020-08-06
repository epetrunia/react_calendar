import React from 'react';

import CalendarDate from '../CalendarDate';

function Week(props) {
  const { year, week } = props;

  const getWeek = () => {
    const days = [];

    for (let i = 0; i < 7; i++) {
      days.push(<CalendarDate key={`${year}-${week}-${i}`} day={i} week={week} year={year} />);
    }
    return days;
  };
  return <tr>{getWeek()}</tr>;
}

export default Week;
