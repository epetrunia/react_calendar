import React from 'react';
import PropTypes from 'prop-types';
import styles from './Calendar.module.scss';
import Month from './Month';
import { format } from 'date-fns';

const Calendar = (props) => {
  const { currentDate, date } = props;
  return (
    <article className={styles.container}>
      <section className={styles.calendarWidget}>
        <div className={styles.today}>
          <span className={styles.currentWeekday}>
            {format(currentDate, 'eeee')}
          </span>
          <span className={styles.currentDay}>{format(currentDate, 'd')}</span>
        </div>
        <div className={styles.calendar}>
          <Month currentDate={currentDate} date={date} />
        </div>
      </section>
    </article>
  );
};

Calendar.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
  date: PropTypes.instanceOf(Date),
};

Calendar.defaultProps = {
  currentDate: new Date(),
  date: new Date(),
};

export default Calendar;
