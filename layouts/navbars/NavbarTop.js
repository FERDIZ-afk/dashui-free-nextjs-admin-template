import { useState } from 'react';
import { Menu, Search } from 'react-feather';
import Link from 'next/link';
import { Nav, Navbar, Form, FormControl, Button, Toast } from 'react-bootstrap';

import QuickMenu from 'layouts/QuickMenu';

const NavbarTop = (props) => {
  const [query, setQuery] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        // Handle success or show a toast
        setShowToast(true);
      } else {
        // Handle error or show a toast
        setShowToast(true);
      }
    } catch (error) {
      console.error('Error during search:', error);
      // Handle error or show a toast
      setShowToast(true);
    }
  };

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
          {/* Search Form for Desktop */}
          <div className="ms-lg-3 d-none d-md-none d-lg-block">
            <Form className="d-flex align-items-center" onSubmit={handleSearch}>
              <FormControl
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="me-2"  // Add spacing to the input
              />
              <Button type="submit" title="Search" size="sm"> {/* Set button size to sm */}
                <Search size="18px" />
              </Button>
            </Form>
          </div>
          {/* Search Form for Mobile */}
          <div className="ms-lg-3 d-lg-none">
            <Form className="search-form d-flex align-items-center" onSubmit={handleSearch}>
              <FormControl
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="me-2"  // Add spacing to the input
              />
              <Button type="submit" title="Search" size="sm"> {/* Set button size to sm */}
                <Search size="18px" />
              </Button>
            </Form>
          </div>
        </div>
        {/* Quick Menu */}
        <Nav className="navbar-right-wrap ms-2 d-flex nav-top-wrap">
          <QuickMenu />
        </Nav>
      </div>
      {/* Toast */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 9999,
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>Search request sent successfully!</Toast.Body>
      </Toast>
    </Navbar>
  );
};

export default NavbarTop;
