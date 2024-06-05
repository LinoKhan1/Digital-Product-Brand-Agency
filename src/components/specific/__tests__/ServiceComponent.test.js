import React from "react";
import { render, screen } from "@testing-library/react";
import ServiceComponent from '../ServiceComponent.jsx';
import { MemoryRouter } from "react-router-dom";

describe('Service Component', () => {
    const mockServices = [
        { name: 'Design', image: 'design_img_path' },
        { name: 'Branding', image: 'branding_img_path' },
        { name: 'SEO', image: 'seo_img_path' },
        { name: 'UX/UI', image: 'ux_ui_img_path' }
    ];

    beforeEach(() => {
        render(
            <MemoryRouter>
                <ServiceComponent services={mockServices} />
            </MemoryRouter>
        );
    });

    test('renders Service Component without crashing', () => {
        const serviceComponent = screen.getByTestId('service-component');
        expect(serviceComponent).toBeInTheDocument();
    });


    test('renders service list with correct services', () => {
        const serviceList = screen.getByTestId('service-list');
        expect(serviceList).toBeInTheDocument();

        mockServices.forEach((service) => {
            const serviceItem = screen.getByText(service.name);
            expect(serviceItem).toBeInTheDocument();
        });
    });
});
