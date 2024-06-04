import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import AuthorInfoComponent from '../AuthorInfoComponent.jsx';

describe('AuthorInfoComponent', () => {
    // Test to ensure that the AuthorInfoComponent renders the author's name and image
    test('renders author name and image', () => {
      // Define test data
      const testName = 'John Doe';
      const testImageSrc = 'test-image.jpg';
  
      // Render the AuthorInfoComponent with test data
      render(<AuthorInfoComponent name={testName} imageSrc={testImageSrc} />);
  
      // Expect the author name to be rendered
      const authorNameElement = screen.getByText(testName);
      expect(authorNameElement).toBeInTheDocument();
  
      // Expect the author image to be rendered with the correct src attribute
      const authorImageElement = screen.getByAltText(`Portrait of ${testName}`);
      expect(authorImageElement).toBeInTheDocument();
      expect(authorImageElement).toHaveAttribute('src', testImageSrc);
    });
  
    // Test to ensure that the AuthorInfoComponent requires name and imageSrc props
    test('requires name and imageSrc props', () => {
        // Mock data
        const authorName = 'John Doe';
        const authorImageSrc = 'path/to/image.jpg';
    
        // Render the component with required props
        render(<AuthorInfoComponent name={authorName} imageSrc={authorImageSrc} />);
    
        // Assert that the component renders without errors
        expect(screen.getByAltText(`Portrait of ${authorName}`)).toBeInTheDocument();
        expect(screen.getByText(authorName)).toBeInTheDocument();
      });
  });