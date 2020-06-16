import React, { Component } from 'react';
import $ from 'jquery' ;   // $  npm install jquery


class GitHub extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            lastGistUrl: ''
        };
    }


    componentDidMount() {
        // AJAX call
        $.get(this.props.source, (result) => {
            let lastGist = result[0];
            console.log("result[0]: "+lastGist)

            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });

        });
    }

    render() {
        return (
            <div>
                {this.state.username}: last gist is <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
}

export default GitHub ;

// <GitHub source="https://api.github.com/users/octocat/gists" />
// reconciliation algorithm -- 1950
// 1. Render -- > update virtual DOM
// 2. reactDOM --> dumps into actual DOM
// 3. re-render --> react render updates the virtual DOM by keeping the object
// 4. React DOM comes in and does the diff, and takes the latest and dumps into actual DOM

// Best performance?
// Because the delta is small, and whole actual DOM is not updated, ONLY delta is updated. thats why its fast loading.
