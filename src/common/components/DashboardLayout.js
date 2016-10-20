import  React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import HeaderBar from './HeaderBar';
import MenuRight from './MenuRight';

class DashboardLayout extends React.Component {
    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props;
        return (
            <div id="wrapper" className="content">
                <HeaderBar
                    isAuthenticated={isAuthenticated}
                    errorMessage={errorMessage}
                    dispatch={dispatch}
                />
                <MenuRight/>
                <div id="page-wrapper" className="page-wrapper" ref="pageWrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

DashboardLayout.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const { categories, logins} = state;
    const { data, authenticated} = categories;
    const { isAuthenticated, errorMessage} = logins;

    return {
        data,
        isAuthenticated,
        errorMessage
    }
}
export default connect(mapStateToProps)(DashboardLayout);