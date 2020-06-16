import React, { Component } from 'react';
import Myuser from "../../data/myuser";
import User from "../user/user";
import GenericComponent from "../generic-component/generic-component"

class MyProps extends Component {
    render() {
        //props: buil-in collects data that parent is providing (by react) :: parent to child communication
        return <div>
            JS is {this.props.name}<br/>
            <h5>This is User Component: </h5><User user={Myuser} />
            <h5>This is Generic Component-1: </h5><GenericComponent />
            <h5>This is Generic Component-2: </h5><GenericComponent things="cadbury"/>
        </div>;
    }
}

export default MyProps ;
export const attrb1 = 15;
export const attrb2 = 21;

/* <MyProps name="the best" /> */