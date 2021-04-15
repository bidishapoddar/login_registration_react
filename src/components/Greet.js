import React, { Component } from 'react';

/*class Greet extends Component {
    render() {
        return (
            <div>
                hello bidisha
            </div>
        );
    }
}*/

const Greet = props =>{

    return (
        <div>
            <h1>hello, i am {props.name}. my age is {props.age}</h1>
            {props.children}
        </div>

        
    )
}

export default Greet;