import React from 'react';
import NextLink from 'next/link';
import { Container } from 'reactstrap';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className='nav-item'>
          <NextLink href={href}>
            <a className='nav-link'>{label}</a>
          </NextLink>
        </li>
      );
    });
  return (
    <nav className='navbar navbar-light bg-light'>
      <Container>
        <NextLink href='/'>
          <a className='navbar-brand'>BitcoinTickets</a>
        </NextLink>
        <div className='d-flex justify-content-end'>
          <ul className='nav d-flex align-items-center'>{links}</ul>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
