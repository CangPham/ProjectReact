import  React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Pagination, Panel, PageHeader} from "react-bootstrap";
import * as categoriesActions from '../../actions/categoryActions';
import CategoryListRow from './CategoryListRow';

class CategoryList extends React.Component{
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {categories} = this.props;

        return (
            <div>
                <div className="col-lg-12">
                    <PageHeader>Tables</PageHeader>
                </div>

                <div className="col-lg-12">
                    <Panel header={<span>Please Sign In</span>}>
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
                                                <table
                                                    className="table table-striped table-bordered table-hover dataTable no-footer"
                                                    id="dataTables-example" role="grid"
                                                    aria-describedby="dataTables-example_info">
                                                    <thead>
                                                    <tr role="row">
                                                        <th className="sorting_asc" tabIndex="0"
                                                            aria-controls="dataTables-example" rowSpan="1" colSpan="1"
                                                            aria-label="Rendering engine: activate to sort column descending"
                                                            aria-sort="ascending" style={ {width: 265} }>Rendering
                                                            engine
                                                        </th>
                                                        <th className="sorting" tabIndex="0"
                                                            aria-controls="dataTables-example" rowSpan="1" colSpan="1"
                                                            aria-label="Browser: activate to sort column ascending"
                                                            style={ {width: 321} }>Browser
                                                        </th>
                                                        <th className="sorting" tabIndex="0"
                                                            aria-controls="dataTables-example" rowSpan="1" colSpan="1"
                                                            aria-label="Platform(s): activate to sort column ascending"
                                                            style={ {width: 299} }>Platform(s)
                                                        </th>
                                                        <th className="sorting" tabIndex="0"
                                                            aria-controls="dataTables-example" rowSpan="1" colSpan="1"
                                                            aria-label="Engine version: activate to sort column ascending"
                                                            style={ {width: 231} }>Engine version
                                                        </th>
                                                        <th className="sorting" tabIndex="0"
                                                            aria-controls="dataTables-example" rowSpan="1" colSpan="1"
                                                            aria-label="CSS grade: activate to sort column ascending"
                                                            style={ {width: 180} }>CSS grade
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {categories.map(category =>
                                                        <CategoryListRow key={category.id} category={category}/>
                                                    )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="dataTables_info" id="dataTables-example_info"
                                                     role="status"
                                                     aria-live="polite">Showing 1 to 10 of 57 entries
                                                </div>
                                            </div>
                                            <div className="col-sm-6" pullRight>
                                                <Pagination activePage={1}
                                                            items={6} perPage={10}
                                                            first={true} last={true}
                                                            prev={true} next={true}
                                                            onSelect={ (pageNumber) => {
                                                            } }/>
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

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoriesActions, dispatch)
    };
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)