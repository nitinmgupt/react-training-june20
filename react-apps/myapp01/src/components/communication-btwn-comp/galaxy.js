// Galaxy --> Solar-system  --> Planet


import React, {Component} from 'react';
import PropTypes from 'prop-types' ;

import SolarSystem from "./solar-system";


class Galaxy extends Component {
    getChildContext() {
        return {
            planetClickHandler: this.planetClickHandler.bind(this),
            mydata: "info from top"
        };
    }

    planetClickHandler() {
        console.log('Planet clicked. Galaxy notified.');
    }

    render() {
        return (
            <SolarSystem />
        );
    }
}
Galaxy.childContextTypes = {
    planetClickHandler: PropTypes.func,
    mydata: PropTypes.string
};
export default Galaxy;