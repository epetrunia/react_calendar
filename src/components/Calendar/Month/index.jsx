import React from 'react';
import Week from '../Week';
import { getWeek, getWeeksInMonth, format } from 'date-fns';

function Month(props) {
  const { year, month } = props;
  const currentDate = new Date();

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
      <caption>{`${format(currentDate, 'MMMM')} ${currentDate.getFullYear()}`}</caption>
      <tr>
        <th>S</th>
        <th>M</th>
        <th>T</th>
        <th>W</th>
        <th>T</th>
        <th>F</th>
        <th>S</th>
      </tr>
      <tbody>{getWeeks()}</tbody>
    </table>
  );
}

export default Month;
