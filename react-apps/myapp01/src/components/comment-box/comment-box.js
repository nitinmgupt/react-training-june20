import React, { Component } from 'react';
import MyProps,{attrb1 as attribute1} from "../my-props/my-props";
import {attrb2 as attribute2} from "../my-props/my-props";
import MyCompPropType from "../comp-prop-type/comp-prop-type";
import MyMessageHoc from "../component-as-function/component-as-function";
import MyTextBox from "../my-textbox/my-textbox";
import MyButton from "../my-button/my-button";
import MyDiv1 from "../my-div/my-div";
import GitHub from "../git-hub/git-hub";
import Mymap from "../my-map/my-map";

class  CommentBox extends Component{
    render(){
        let  status = "empty" ;
        return (
            <div className="myBox">
                This is an  info Box, which is currently {status}.<br/>
                <h4>attrb1: {attribute1}</h4>
                <h4>attrb2: {attribute2}</h4>
                <h4>This is MyProps Component: </h4><MyProps name="the best" />
                <h4><MyTextBox /></h4>
                <h4><MyButton /></h4>
                <h4>My Div: </h4><MyDiv1  name=" the best"/>
                <h4>Git Hub: </h4><GitHub source="https://api.github.com/users/octocat/gists" />
                <h4>My Map: </h4><Mymap />
                {/*<h4>This is MyProp type:</h4><MyCompPropType message='cool framework' number="not a number" />*/}
                <h4>This is MyProp type:</h4><MyCompPropType message='cool framework' number={21} requiredString={"true"} />
                <h4>Component as Function:</h4><MyMessageHoc  name="HOC" />

            </div>
    );
    }  // eo render()
}

export default CommentBox ;