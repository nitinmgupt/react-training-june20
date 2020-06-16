import React, { Component } from 'react';

class  MyButton extends Component{

    // state is used internally in the component. State is completely private and can not be given access to outside
    // props used between the parent-child communication (immutable :: i.e. not to be changed)
    // and hence we used "state" in this example
    //"state" can be initialized via "props" and "state" can be changed but "props" can not
    constructor(props){
        super(props);
        this.state = {liked: false};
        this.handleClick = this.handleClick.bind(this) ;
    }

    handleClick(event) {
        //event is not being utilized here.
        //built in function for built in object "state"  which reset the states
        // render() will be invoked automatically after this.
        //when you want to change the value of a "state" object, do not assign it manually. call setState(). else render() will not get invoke.
        // here setState is changing one object named "liked". rest others will remain intact.
        this.setState({liked: !this.state.liked});
    }
    render() {
        let  text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
}

export default MyButton ;

// <MyButton />