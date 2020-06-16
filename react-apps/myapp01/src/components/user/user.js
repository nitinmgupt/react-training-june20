import React, { Component } from 'react';



class UserName extends Component {
    render() {
        return <div><b>Name:</b>  {this.props.name}</div>;
    }
}

class User extends Component {
    render() {
        return <div>
            <b>City:</b> {this.props.user.city}
            <h6>This is UserName Component: </h6><UserName name={this.props.user.name} />
        </div>;
    }
}

export default User ;