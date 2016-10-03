import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions'

class ManageCategoryPage extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <h1>Manage Category</h1>
        );
    }
}

ManageCategoryPage.propTypes = {
    //myProp: React.PropTypes.object, 
    actions: React.PropTypes.object.isRequired
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
        actions: bindActionCreators(categoryActions, dispatch)
    };
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ManageCategoryPage)
