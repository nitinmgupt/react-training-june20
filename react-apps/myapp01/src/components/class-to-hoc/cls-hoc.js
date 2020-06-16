import React from 'react';
//import React, {Component} from 'react';

// Way-1
/*class  MyContainerComm extends Component{
    render() {
        return <Intermediate mytext="What is react??" />;
    }
}

class  Intermediate extends Component{
    render() {
        // Intermediate doesn't care about "text", but just passes it down.
        return <Child mytext={this.props.mytext} />;
    }
}

class  Child extends Component{
    render() {
        return <span>{this.props.mytext}</span>;
    }
}*/

// Way-2
let MyContainerComm=(props)=>(<Intermediate mytext="What is react??" />)

let Intermediate=(props)=><Child mytext={props.mytext} />

let Child=(props)=><span><h2>{props.mytext}</h2></span>

export default MyContainerComm ;


//ReactDOM.render(<MyContainerComm />, document.getElementById('content'));
//A higher-order component (HOC) is an advanced technique in React for reusing component logic.
// They are a pattern that emerges from React's compositional nature.
// Concretely, a higher-order component is a function that takes a component and returns a new component.