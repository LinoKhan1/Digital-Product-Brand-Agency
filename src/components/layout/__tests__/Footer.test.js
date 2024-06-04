import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('Footer Component', () => {
    beforeEach(() => {
        render(
          <MemoryRouter>
            <Footer />
          </MemoryRouter>
        );
      });
  test('renders Footer component without crashing', () => {
  });

  test('renders logo image', () => {
    const logoImage = screen.getByAltText('logo-image');
    expect(logoImage).toBeInTheDocument();
  });

  test('renders contact section', () => {
    const contactSection = screen.getByText(/As your partner/);
    expect(contactSection).toBeInTheDocument();
  });

  // Add more tests for other sections as per the list provided
});