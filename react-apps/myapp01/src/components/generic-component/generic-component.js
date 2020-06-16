import React, { Component } from 'react';

class GenericComponent extends Component {
    constructor(props) {
        super(props); // goes to base class
        // state is another buil-in just like props
        // if state is to be used (want to initialize), constructor has to be in place
        this.state = { thing: this.props.things };
        console.log("constructor: " ,  this.props.things) ;
    }

    render () {
        console.log("render: " ,  this.props.things) ;
        return( <div>
                    {this.props.things}

                </div>)
    }
}


// default prop values, defined outside class
GenericComponent.defaultProps = { things: "biscuit" };

export default GenericComponent ;