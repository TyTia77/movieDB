import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
         <li><IndexLink to="/">home</IndexLink></li>
         <li><IndexLink to="/actor">actor</IndexLink></li>
         <li><IndexLink to="/movie">movie</IndexLink></li>
         <li><IndexLink to="/tv">tv</IndexLink></li>
        </ul>
      </div>
    );
  }
}