import  React, {PropTypes} from 'react';
import $ from 'jquery';
import HeaderBar from './HeaderBar';
import MenuRight from './MenuRight';

class DashboardLayout extends React.Component {
    render() {
        return (
            <div id="wrapper" className="content">
                <HeaderBar/>
                <MenuRight/>
                <div id="page-wrapper" className="page-wrapper" ref="pageWrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

DashboardLayout.propTypes = {
    children: PropTypes.object.isRequired
};
export default DashboardLayout;