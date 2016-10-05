import  React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import * as loginActions from '../../actions/loginActions';

class HeaderBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { isAuthenticated, errorMessage } = this.props;

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'dashboard'}>Admin</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title={<i className="fa fa-user fa-fw" />} id="basic-nav-dropdown">

                            <MenuItem eventKey={1.1}>
                                <i className="fa fa-user fa-fw"></i> User Profile
                            </MenuItem>
                            <MenuItem eventKey={1.2}>
                                <Link to="categories"><i className="fa fa-table fa-fw"></i> &nbsp;
                                    Categories</Link>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>
                                <Link onClick={() => this.props.actions.logoutUser()} to={'login'}>
                                    <i className="fa fa-sign-out fa-fw"></i> Logout
                                </Link>
                            </MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

HeaderBar.propTypes = {
    actions: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
};
function mapStateToProps(state, ownProps) {

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)