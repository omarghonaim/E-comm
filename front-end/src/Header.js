import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory('');
    function logOut(){
        localStorage.clear();
        history.push('/register')
    }
    let user = JSON.parse(localStorage.getItem('user-info'))
    return (
        <div>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="#home">E-comm</Navbar.Brand>
                <Nav className="me-auto navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add">add product</Link>
                                <Link to="/update">update product</Link>
                                <Link to="/list">product list</Link>
                            </>
                             :
                            <>
                                <Link to="/login">login</Link>
                                <Link to="/register">register</Link>
                            </>
                    }

                </Nav>
                {
                    localStorage.getItem('user-info')?
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logOut} >logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>:null
                }


            </Navbar>
        </div>
    )
}
export default Header