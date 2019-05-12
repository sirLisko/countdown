import React, { Component } from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";
import Countdown from "./Countdown";

class CountdownPage extends Component<RouteComponentProps> {
  state = {
    now: new Date(),
    then: null
  };
  private interval: any;

  componentDidMount() {
    const { location } = this.props;
    this.interval = setInterval(() => this.setState({ now: new Date() }), 1000);
    const values = queryString.parse(location.search);
    console.log(values);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { now } = this.state;
    const then = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);

    return <Countdown from={now} to={then} />;
  }
}

export default CountdownPage;
