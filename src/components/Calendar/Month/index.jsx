import React from 'react';
import Week from '../Week';
import { getWeek, getWeeksInMonth } from 'date-fns';

function Month(props) {
  const { year, month } = props;

  const getWeeks = () => {
    const date = new Date(year, month, 1);
    const firstWeek = getWeek(date);
    const numberOfWeeks = getWeeksInMonth(date);
    const weeks = [];
    for (let i = firstWeek; i < firstWeek + numberOfWeeks; i++) {
      weeks.push(<Week key={`${year}-${i}`} year={year} month={month} week={i} />);
    }
    return weeks;
  };

  return (
    <table>
      <tbody>{getWeeks()}</tbody>
    </table>
  );
}

export default Month;
