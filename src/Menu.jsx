import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export function Menu() {

    function logout() {
        sessionStorage.clear();
        window.location = '/login';
    }
    function addarticle(){
        sessionStorage.clear();
       window.location = '/article'
        }
        
    return (<>

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link class="nav-link" to="/">Dashboard</Link>
                        <Link class="nav-link" to="/product">Product</Link>
                        <Link class="nav-link" to="/product2">Product2</Link>
                        <Link class="nav-link" to="/todos">Todo</Link>
                        <Link class="nav-link" to="/user">User</Link>
                        <Link class="nav-link" to="/student">Student</Link>
                        {!sessionStorage.getItem("islogin") && <Link class="nav-link" to="/register">Register</Link>}
                        {!sessionStorage.getItem("islogin") && <Link class="nav-link" to="/login">Login</Link>}
                        {sessionStorage.getItem("islogin") && <a onClick={logout} class="nav-link" href="#">Logout</a>}
                        <Link class="nav-link" to="/category">Categorys</Link>
                        {/* {!sessionStorage.getItem("islogin")&&<Link class="nav-link" to="/article">Articles</Link>} */}
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}
