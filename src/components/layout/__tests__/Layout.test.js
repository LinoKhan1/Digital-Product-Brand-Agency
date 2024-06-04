// src/components/specific/__tests__/Layout.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Layout.jsx'; // adjust the import path as necessary
import Navbar from '../Navbar.jsx'; // adjust the import path as necessary

// Mock the Navbar component
jest.mock('../Navbar', () => () => <div>Mock Navbar</div>);

describe('Layout Component', () => {
    test('renders Navbar and Outlet components correctly', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<div>Mock Outlet</div>} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        // Check if the Navbar is rendered
        expect(screen.getByText('Mock Navbar')).toBeInTheDocument();

        // Check if the Outlet is rendered
        expect(screen.getByText('Mock Outlet')).toBeInTheDocument();
    });
});
