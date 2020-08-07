import React from "react";
import styles from "./CalendarDate.module.scss";
import { startOfWeek, parse, addDays, isSameMonth, isSameDay } from "date-fns";
import classNames from "classnames";

function CalendarDate(props) {
  const { day, week, year, currentDate } = props;
  const date = startOfWeek(parse(`${year}-${week}`, "Y-w", new Date()));
  const newDate = addDays(date, day);

  const dateClasses = classNames(
    [styles.day],
    {
      [styles.anotherMonthDay]: !isSameMonth(newDate, currentDate),
    },
    { [styles.selectedDay]: isSameDay(newDate, currentDate) }
  );
  return <td className={dateClasses}>{newDate.getDate()}</td>;
}

export default CalendarDate;
