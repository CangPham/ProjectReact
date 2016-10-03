import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CategoriesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                category
            </div>
        );
    }
}

CategoriesPage.propTypes = {
    //myProp: React.PropTypes.object, 
    //actions: React.PropTypes.object.isRequired
}

// Which props do we want to inject, given the global state?
function select(state) {
    return {
        data: state
    }
}

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage)
