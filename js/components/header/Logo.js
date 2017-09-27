import React from "react";

export default class Logo extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <fig> logo </fig>
        <aside>
          <span> TMDB </span>
          <span> Ty Movie Database</span>
        </aside>
      </div>
    );
  }
}