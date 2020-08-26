import React from 'react';
import Week from './Week';
import styles from './Month.module.scss';
import PropTypes from 'prop-types';
import { startOfMonth, endOfMonth, format, eachWeekOfInterval } from 'date-fns';

function Month(props) {
  const getWeeks = ({ date, currentDate }) => {
    return eachWeekOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    }).map((sunday) => (
      <Week
        key={sunday}
        sunday={sunday}
        currentDate={currentDate}
        date={date}
      />
    ));
  };
  const { currentDate } = props;
  return (
    <table>
      <caption className={styles.monthName}>{`${format(
        currentDate,
        'MMMM y'
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
        {getWeeks(props)}
      </tbody>
    </table>
  );
}

Month.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
  date: PropTypes.instanceOf(Date),
};

Month.defaultProps = {
  currentDate: new Date(),
};

export default Month;
