import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default Welcome;