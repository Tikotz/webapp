import React,{Component} from "react";
import { NavLink } from "react-bootstrap";
import { Navbar,Nav } from "react-bootstrap";

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"/> */}
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" end to="/" >
                        Go to Home
                    </NavLink> | {" "}
                    <Nav.Link className="d-inline p-2 bg-dark text-white" to="/department">
                        Department
                    </Nav.Link>
                    <Nav.Link className="d-inline p-2 bg-dark text-white" to="#/employee">
                        Employee
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}