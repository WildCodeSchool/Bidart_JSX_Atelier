import React, { Component } from 'react';

const data = {};

class Avatar extends Component {
  render() {
    let image = this.props.image
      ? this.props.image
      : 'https://www.drupal.org/files/issues/default-avatar.png';
    let styleAvatar = this.props.star && { color: 'red', fontStyle: 'Italic' };
    return (
      <div>
        <h1 style={styleAvatar}>
          {this.props.firstName} {this.props.lastName}
        </h1>
        <img src={image} />
      </div>
    );
  }
}

export default Avatar;
