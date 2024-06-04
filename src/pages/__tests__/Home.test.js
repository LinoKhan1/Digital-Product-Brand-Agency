import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home/Home.jsx';

describe('Home Component', () => {
  test('renders without crashing', () => {
    render(<Router><Home /></Router>);
  });

  test('renders main heading correctly', () => {
    render(<Router><Home /></Router>);
    expect(screen.getByText('Get a beautiful website that drives revenue')).toBeInTheDocument();
  });

  // Add more tests for other aspects of the Home component...
});
