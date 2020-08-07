import React from "react";
import Week from "../Week";
import styles from "./Month.module.scss";
import { getWeek, getWeeksInMonth, format } from "date-fns";

function Month(props) {
  const { year, month, currentDate } = props;

  const getWeeks = () => {
    const date = new Date(year, month, 1);
    const firstWeek = getWeek(date);
    const numberOfWeeks = getWeeksInMonth(date);
    const weeks = [];
    for (let i = firstWeek; i < firstWeek + numberOfWeeks; i++) {
      weeks.push(
        <Week
          key={`${year}-${i}`}
          currentDate={currentDate}
          year={year}
          month={month}
          week={i}
        />
      );
    }
    return weeks;
  };

  return (
    <table>
      <caption className={styles.monthName}>{`${format(
        currentDate,
        "MMMM y"
      )}`}</caption>
      <tbody>
        <tr className={styles.weekday}>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
        {getWeeks()}
      </tbody>
    </table>
  );
}

export default Month;
