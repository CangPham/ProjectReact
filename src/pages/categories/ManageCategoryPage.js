import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions'
import CategoryForm from './CategoryForm';

class ManageCategoryPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            category: Object.assign({}, this.props.category),
            errors: {}
        };
    }

    render() {
        return (
            <div>
                <h1>Manage Category</h1>
                <CategoryForm
                    category={this.state.category}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

ManageCategoryPage.propTypes = {
    category: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    let category = {id: '', CategoryName: '', CategoryDescription: ''};
    return {
        category: category
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ManageCategoryPage)
