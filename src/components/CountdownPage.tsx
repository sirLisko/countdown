import React from "react";
import { RouteComponentProps } from "react-router-dom";

import Countdown from "components/Countdown";
import { getQueryString } from "utils/queryString";
import { isValidDate, normaliseDateOrder } from "utils/date";

const NEXT_YEAR = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);

class CountdownPage extends React.Component<RouteComponentProps> {
  readonly state = {
    now: new Date(),
    then: NEXT_YEAR,
    message: "to the next year",
    filters: [],
  };
  private interval: null | ReturnType<typeof setTimeout> = null;

  componentDidMount() {
    const { location } = this.props;
    const { message: defaultMessage, then: defaultThen } = this.state;
    this.interval = setInterval(() => this.setState({ now: new Date() }), 1000);
    const { then, message, filters } = getQueryString(location.search);
    this.setState({
      message: then ? message : message || defaultMessage,
      then: then || defaultThen,
      filters: filters,
    });
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }

  render() {
    const { now, message, then, filters } = this.state;
    if (!this.interval) {
      return null;
    }
    const { from, to, isInverted } = normaliseDateOrder(now, then);
    return (
      <div>
        <p className="text">{message}</p>
        {isValidDate(then) ? (
          <Countdown
            from={from}
            to={to}
            filters={filters}
            isInverted={isInverted}
          />
        ) : (
          <div style={{ textAlign: "center" }}>
            Ops! Something when wrong with your date
          </div>
        )}
        <a href="/new">New</a>
      </div>
    );
  }
}

export default CountdownPage;
