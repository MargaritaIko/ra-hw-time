import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';

export default function DateTimeComponent(Component) {
  function TimeStamp(props) {
    function date() {
      return (
        <Moment format="YYYY-MM-DD HH:mm">
          {props.date}
        </Moment>
      );
    }
    return <Component url={props.url} date={date()} />
  }
  return TimeStamp;
}