import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions';
import { Pagination, Panel, PageHeader} from "react-bootstrap";
import CategoryList from './CategoryList';

class CategoriesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const {data} = this.props;
        return (
            <div>
                <div className="col-lg-12">
                    <PageHeader>Categories</PageHeader>
                </div>

                <div className="col-lg-12">
                    <Panel>
                        <div>
                            <div className="dataTable_wrapper">
                                <div id="dataTables-example_wrapper"
                                     className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <div className="dataTables_length" id="dataTables-example_length">
                                                <label>Show <select name="dataTables-example_length"
                                                                    aria-controls="dataTables-example"
                                                                    className="form-control input-sm">
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select> entries</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div id="dataTables-example_filter" className="dataTables_filter">
                                                <label>Search:<input type="search" className="form-control input-sm"
                                                                     placeholder="" aria-controls="dataTables-example"/></label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <CategoryList categories={data}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Panel>
                </div>
            </div>
        );
    }
}

CategoriesPage.propTypes = {
    data: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired,
    isSecretQuote: React.PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps) {
    const {categories} = state
    const {data, authenticated } = categories
    return {
        data,
        isSecretQuote: authenticated
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage)
