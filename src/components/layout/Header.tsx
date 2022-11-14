import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
  return (
    <header>
      <Navbar
        bg="light"
        expand="lg"
        className="shadow-sm m-0"
        style={{ height: '70px', width: '100%' }}
      >
        <Navbar.Brand className="ms-3" href="#home">
          CRUD Showcase
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="d-flex align-items-center">
              <span className="ri-home-2-fill" />
              <Nav.Link href="/">Home</Nav.Link>
            </div>
            <div className="d-flex align-items-center">
              <span className='ri-add-fill' />
              <Nav.Link href="/create">Add Entry</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
