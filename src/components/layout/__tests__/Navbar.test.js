// src/components/specific/__tests__/Navbar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar.jsx'; // adjust the import path as necessary

describe('Navbar Component', () => {
    test('renders navigation links correctly', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Check if the Home link is rendered
        expect(screen.getByText('Home')).toBeInTheDocument();

        // Check if the About link is rendered
        expect(screen.getByText('About')).toBeInTheDocument();

        // Check if the Blog link is rendered
        expect(screen.getByText('Blog')).toBeInTheDocument();

        // Check if the Contact link is rendered
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    test('renders the logo correctly', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Check if the logo is rendered
        const logo = screen.getByAltText('Linokhan Logo');
        expect(logo).toBeInTheDocument();
        expect(logo.src).toContain('Logo-black.jpg'); // Adjust the image source check if necessary
    });

    test('toggles navigation menu on button click', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Use the aria-label or data-testid to get the toggle button
        const toggleButton = screen.getByLabelText('Toggle navigation'); // Or use screen.getByTestId('nav-toggle-button');
        const navMenu = screen.getByTestId('navbar-supported-content');

        // Check if the menu is initially closed
        expect(navMenu.classList).not.toContain('show');

        // Simulate a click on the toggle button
        fireEvent.click(toggleButton);

        // Check if the menu is opened
        expect(navMenu.classList).toContain('show');

        // Simulate another click on the toggle button
        fireEvent.click(toggleButton);

        // Check if the menu is closed again
        expect(navMenu.classList).not.toContain('show');
    });
});
