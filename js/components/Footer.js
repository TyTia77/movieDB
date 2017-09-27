import React from "react";

require('../../styles/components/footer.scss')

export default class Footer extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div class="footer">
        <h1> By Ty Tia, Using React, Redux and Webpack </h1>
      </div>
    );
  }
}