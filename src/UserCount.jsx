
import React from 'react'

const UserCount = React.createClass({

  render() {
    return (
        <span className="users"> users online: {this.props.users}</span>
    )
  }
});

export default UserCount;
