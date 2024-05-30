/* React */
import React from "react";

/* Testing */
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

/* Routing */
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
/* About */
import About from "../About/About";

describe("About Page", () => {

    // Render Tests
    test("renders About component without crashing", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
    });

    test("renders Hero section with correct content", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        expect(screen.getByText("Digital Product")).toBeInTheDocument();
        expect(screen.getByText(/linokhan.com is a dynamic digital product and brand agency/)).toBeInTheDocument();
    });

    test("renders About section with correct content", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        expect(screen.getByText("_Who We Are")).toBeInTheDocument();
        expect(screen.getByText(/linokhan.com is a Full Service Web Development and Branding Agency./)).toBeInTheDocument();
    });

    test("renders CoreValuesComponent", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        expect(screen.getByText(/Our Culture, Values, and Beliefs/)).toBeInTheDocument();
    });

    test("renders DifferentiatorComponent", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        expect(screen.getByText(/_Our Differentiators/)).toBeInTheDocument();
    });

    test("renders Resources section with correct content", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        expect(screen.getByText("_Resources")).toBeInTheDocument();
        expect(screen.getByText("Best Practices for SEO: Boosting Your Website")).toBeInTheDocument();
        expect(screen.getByText(/In the digital age, having a strong online presence is essential/)).toBeInTheDocument();
    });

    test("renders Footer component", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        expect(screen.getByText(/As your partner, we treat your website like it is our own/)).toBeInTheDocument();
    });

   

    test("Read more button navigates to /blog", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        const readMoreButton = screen.getByText("Read more");
        expect(readMoreButton.closest('a')).toHaveAttribute('href', '/blog');
    });

    // Structural Tests
    test("correct structure of Hero section", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        const heroSection = screen.getByText("Digital Product").closest('.hero');
        expect(heroSection).toContainElement(screen.getByText(/linokhan.com is a dynamic digital product and brand agency/));
    });

    test("correct structure of About section", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        const aboutSection = screen.getByText("_Who We Are").closest('.about-section');
        expect(aboutSection).toContainElement(screen.getByText(/linokhan.com is a Full Service Web Development and Branding Agency./));
    });

    test("correct structure of Resources section", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        const resourcesSection = screen.getByText("_Resources").closest('.resources-section');
        expect(resourcesSection).toContainElement(screen.getByText("Best Practices for SEO: Boosting Your Website"));
    });

    
});
