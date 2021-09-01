import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navigation.css";
import routes from "../pages/routes";

function Navigation() {
    return (
        <Navbar className="mainNavbar">
            <Container className="d-flex align-items-end">
                <Navbar.Brand>
                    <Link className="mainNavbar__brand" to={routes.home}>
                        StarDust
                    </Link>
                </Navbar.Brand>
                <Nav className="d-flex justify-content-end">
                    <Link className="mainNavbar__link" to={routes.home}>
                        Home
                    </Link>
                    <Link className="mainNavbar__link" to={routes.news}>
                        News
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
