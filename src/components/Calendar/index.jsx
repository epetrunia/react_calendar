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
      <section>
        <div>
          <span>{format(currentDate, "eeee")}</span>
          <span>{format(currentDate, "d")}</span>
        </div>
        <Month year={getYear(currentDate)} month={getMonth(currentDate)} />
      </section>
    );
  }
}

export default Calendar;
