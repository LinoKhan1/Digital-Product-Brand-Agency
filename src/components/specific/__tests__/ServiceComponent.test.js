import React from "react";
import { render, screen } from "@testing-library/react";
import ServiceComponent from '../ServiceComponent,jsx';
import { MemoryRouter } from "react-router-dom";
//import design_img from '../../../assets/images/Design.JPG';

describe('Service Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <ServiceComponent />
            </MemoryRouter>
        );
    });
    // Renders test
    test('renders Core Values Component without crashing', () => {

    });

    test('renders service list with correct services', () => {
        const serviceList = screen.getByTestId('service-list');
        expect(serviceList).toBeInTheDocument();

        const services = ['Design', 'Branding', 'SEO', 'UX/UI'];
        services.forEach((service) => {
            const serviceItem = screen.getByText(service);
            expect(serviceItem).toBeInTheDocument();
        });
    });

   /* test('renders service image when hovering over service name', () => {
        render(<ServiceComponent />);
    
        const designService = screen.getByText('Design');
        const serviceImage = screen.getByAltText('Service Image');
        expect(serviceImage).toBeInTheDocument(); // Ensure the image is rendered initially
    
        fireEvent.mouseEnter(designService);
        expect(serviceImage).toHaveAttribute('src', design_img);
      });*/



})