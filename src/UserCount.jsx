
import React from 'react'

const UserCount = React.createClass({

  render() {
    console.log('WOOOOOO USER COUNT', this.props.users);
    return (
        <span className="users"> users online: {this.props.users}</span>
    )
  }
});

export default UserCount;
