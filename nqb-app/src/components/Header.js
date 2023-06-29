import React from 'react'
import {Nav, Navbar, Container, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

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
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart' aria-hidden='true'></i>
                    Login
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart' aria-hidden='true'></i>
                    Register
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/payment'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart' aria-hidden='true'></i>
                    Payment
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
