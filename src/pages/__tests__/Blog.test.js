import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from '../Blog/Blog.jsx';

describe('Blog Page', () => {

    beforeEach(() => {
        render(
          <MemoryRouter>
            <Blog />
          </MemoryRouter>
        );
      });
    // Render Tests
    test("renders Blog component without crashing", () =>{
        
    })

    test("renders Hero section with correct content", ()=>{
        
        expect(screen.getByText(/Best Practices for SEO: Boosting Your Website Visibility/))
    })

    test('renders article intro text', () => {
        expect(screen.getByText(/In the digital age, having a strong online presence is essential/)).toBeInTheDocument();
    });

    test('renders all article sections', () => {
        const headings = [
            /1. Keyword Research and Usage/,
            /2. High Quality Content/,
            /3. On-Page SEO/,
            /4. Technical SEO/,
            /5. Internal and External Linking/,
            /6. User Experience \(UX\)/,
            /7. Analytics and Monitoring/
        ];
        headings.forEach((heading) => {
            expect(screen.getByText(heading)).toBeInTheDocument();
        });
    });

    test('renders conclusion text', () => {
        expect(screen.getByText(/By following these best practices, you can enhance your website’s SEO/)).toBeInTheDocument();
    });

    test('renders Footer component', () => {
        // Assuming the Footer component has some identifiable text, e.g., "Footer"
        expect(screen.getByText(/As your partner, we treat your website like it is our own/)).toBeInTheDocument();
    });
});
