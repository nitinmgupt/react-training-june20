import React, {Component} from 'react';

class MyDiv1 extends Component {

    // Example of life cycle:
    // 1. Constructor
    // 2. render
    // 3.componentWillMount
    // 4.componentDidMount
    // 5. componentWillUnmount

    constructor(props) {
        super(props);
        console.log("constr -- prop: ",   this.props.name) ;
    }

    // This is depricated. used in Ajax call
    //    componentWillMount() { console.log("componentWillMount") ;   }

    render() {
        console.log("render") ;
        return <div>JS: {this.props.name}</div>;
    }

    //Once load finish
    componentDidMount() { console.log("componentDidMount: ", this.props.name) ; }
    // will play role when routing comes in picture as view will change.
    // Release critical resources here
    componentWillUnmount() {console.log("componentWillUnmount:", this.props.name) ; }

}

export default MyDiv1 ;

//  <MyDiv1  name=" the best"/>