import React from "react";

export default class Cast extends React.Component {

  handleTap(e){
    let id = e.currentTarget.getAttribute('data-set-id');
    window.location.href = '#/actor/' +id;
    console.log('url', window.location.href = '#/actor/' +id);
    console.log('actor id:', e.currentTarget.getAttribute('data-set-id'));
  }

  render() {
    const { filteredCast } = this.props;

    return (
      <div class="cast-container" data-set-id={filteredCast.id} onClick={this.handleTap}>
          <img src={filteredCast.profile_path}/>
          <div class="cast-name-container">
            <p>{filteredCast.name}</p>
            <p>{filteredCast.character}</p>
          </div>
          <br/>
      </div>
    );
  }
}