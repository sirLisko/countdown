import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

import Countdown from "./Countdown";
import { getQueryString } from "../utils/queryString";
import { isValidDate } from "../utils/date";

const NEXT_YEAR = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);

class CountdownPage extends Component<RouteComponentProps> {
  state = {
    now: new Date(),
    then: null,
    message: "to the next year",
    filters: []
  };
  private interval: any;

  componentDidMount() {
    const { location } = this.props;
    const { message: defaultMessage } = this.state;
    this.interval = setInterval(() => this.setState({ now: new Date() }), 1000);
    const { then, message, filters } = getQueryString(location.search);
    this.setState({
      message: then ? message : message || defaultMessage,
      then: then || NEXT_YEAR,
      filters: filters
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { now, message, then, filters } = this.state;
    if (!then) {
      return null;
    }
    return (
      <div>
        <p className="text">{message}</p>
        {isValidDate(then) ? (
          <Countdown from={now} to={then} filters={filters} />
        ) : (
          <div style={{ textAlign: "center" }}>
            Ops! Something when wrong with your date
          </div>
        )}
      </div>
    );
  }
}

export default CountdownPage;
