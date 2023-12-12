import { Menu, Search } from 'react-feather';
import Link from 'next/link';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

import QuickMenu from 'layouts/QuickMenu';

const NavbarTop = (props) => {
  return (
    <Navbar expanded="lg" className="navbar-classic navbar navbar-expand-lg">
      <div className='d-flex justify-content-between w-100'>
        <div className="d-flex align-items-center">
          <Link
            href="#"
            id="nav-toggle"
            className="nav-icon me-2 icon-xs"
            onClick={() => props.data.SidebarToggleMenu(!props.data.showMenu)}>
            <Menu size="18px" />
          </Link>
          <div className="ms-lg-3 d-none d-md-none d-lg-block">
            {/* Search Form */}
            <div className="search-bar">
              <Form className="search-form d-flex align-items-center" method="POST" action="/search">
                <FormControl type="text" name="query" placeholder="Search" title="Enter search keyword" />
                <Button type="submit" title="Search">
                  <Search size="18px" />
                </Button>
              </Form>
            </div>
          </div>
        </div>
        {/* Quick Menu */}
        <Nav className="navbar-right-wrap ms-2 d-flex nav-top-wrap">
          <QuickMenu />
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavbarTop;
