import React from "react";
import { Switch, Route, withRouter } from "react-router";

import List from "./List";
import TodayWeather from "./TodayWeather";
import "./weather.css";

const API_CITIES = "http://localhost:8080/weather-crawler/available-cities";

class Weather extends React.Component {
  state = {
    cities: []
  };

  async componentDidMount() {
    const city_list = await fetch(API_CITIES)
      .then(res => res.json())
      .then(data => data);

    this.setState({
      cities: city_list
    });
  }

  render() {
    const { match } = this.props;
    const { cities } = this.state;

    // emtpy array check
    if (
      cities != null &&
      typeof cities == "object" &&
      !Object.keys(cities).length
    ) {
      return <div>Loading...</div>;
    }

    return (
      <div className="weather">
        <Switch>
          <Route path={`${match.path}/:cityId`} component={TodayWeather} />
          <Route
            exact
            path={match.path}
            render={() => <List cities={cities} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Weather);
