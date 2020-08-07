import React, { Component } from "react";
import styles from "./Calendar.module.scss";
import Month from "./Month";
import { format, getMonth, getYear } from "date-fns";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;
    return (
      <article className={styles.container}>
        <section className={styles.calendarWidget}>
          <div className={styles.today}>
            <span className={styles.currentWeekday}>
              {format(currentDate, "eeee")}
            </span>
            <span className={styles.currentDay}>
              {format(currentDate, "d")}
            </span>
          </div>
          <div className={styles.calendar}>
            <Month
              currentDate={currentDate}
              year={getYear(currentDate)}
              month={getMonth(currentDate)}
            />
          </div>
        </section>
      </article>
    );
  }
}

export default Calendar;
