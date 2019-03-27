// Avatar.js

import React, { Component } from 'react';

class Avatar extends Component {
    render() {
        let avatarImg = this.props.image ? this.props.image : "https://www.drupal.org/files/issues/default-avatar.png"
        let h1Style = this.props.star &&
            {
                color: "red",
                fontStyle: "italic"
            }

        return (
            <div>
                <h1 style={h1Style}>
                    {this.props.firstName} {this.props.lastName}
                </h1>
                <img src={avatarImg} alt={`${this.props.firstName} ${this.props.lastName}`} />
            </div>
        );
    }
}

export default Avatar;