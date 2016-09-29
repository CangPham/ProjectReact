import  React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
class HeaderBar extends React.Component {
    render() {
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
                                <i className="fa fa-gear fa-fw"></i> Settings
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>
                                <Link to={'login'}>
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
    //myProp: PropTypes.string.isRequired
};
export default HeaderBar;