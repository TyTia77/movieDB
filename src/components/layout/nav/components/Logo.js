import React from "react";

export default class Logo extends React.Component {
  render() {
    return (
      <div>
        <div class="logo-container">
          <span class="logo">TyDb</span>
        </div>
        <aside>
          <span> TMDB </span>
          <span> Ty Movie Database</span>
        </aside>
      </div>
    );
  }
}