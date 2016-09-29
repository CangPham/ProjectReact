import  React, {PropTypes} from 'react';
import {Link} from 'react-router';
class MenuRight extends React.Component {
    render() {
        return (
            <div className="navbar-default sidebar" style={ {'marginLeft': '-10px'} } role="navigation">
                <div className="sidebar-nav navbar-collapse collapse">
                    <ul className="nav in" id="side-menu">
                        <li>
                            <Link to="home"><i className="fa fa-dashboard fa-fw"></i> &nbsp;Dashboard</Link>
                        </li>

                        <li>
                            <Link to="category"><i className="fa fa-table fa-fw"></i> &nbsp;
                                Categories</Link>
                        </li>

                        <li>
                            <Link to="dashboard.forms"><i className="fa fa-edit fa-fw"></i> Forms</Link>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

MenuRight.propTypes = {
    //myProp: PropTypes.string.isRequired
};
export default MenuRight;