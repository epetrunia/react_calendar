import React from 'react';
import styles from './CalendarDate.module.scss';
import PropTypes from 'prop-types';
import { format, isSameMonth, isSameDay } from 'date-fns';
import classNames from 'classnames';

const CalendarDate = ({ day, currentDate }) => {
  const dayStyles = classNames(
    [styles.day],
    {
      [styles.anotherMonthDay]: !isSameMonth(day, currentDate),
    },
    { [styles.selectedDay]: isSameDay(day, currentDate) }
  );
  return <td className={dayStyles}>{format(day, 'd')}</td>;
};

CalendarDate.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  date: PropTypes.instanceOf(Date),
};

CalendarDate.defaultTypes = {
  currentDate: new Date(),
};

export default CalendarDate;
