import React from 'react'
import {Nav, Navbar, Container, Row} from 'react-bootstrap'

function Header() {
  return (
    <div>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <Navbar.Brand href='#home'>nqb App</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>Login</Nav.Link>
                <Nav.Link href='#link'>Register</Nav.Link>
                <Nav.Link href='#link'>Payment</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
