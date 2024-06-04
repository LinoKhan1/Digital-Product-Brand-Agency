/* React */
import React from 'react';

/* Testing */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

/* Routing */
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';

/* Components */
import Contact from '../Contact/Contact.jsx';
import PreviousClient from '../Contact/PreviousClient.jsx';
import SellProduct from '../Contact/SellProduct.jsx';
import GetProposal from '../Contact/GetProposal.jsx';

/* EmailJS */
import emailjs from '@emailjs/browser';
import { wait } from '@testing-library/user-event/dist/utils';



describe("Contact Page", () => {



    // Render Tests
    test("renders Contact componenrt without crashing", () => {
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        );
    });

    test("renders Previous client component without crashing", () => {
        render(
            <MemoryRouter>
                <PreviousClient />
            </MemoryRouter>
        );
    });

    test("renders Get proposal component without crashing", () => {
        render(
            <MemoryRouter>
                <GetProposal />
            </MemoryRouter>
        );
    });
    test("renders Sell product component without cradhing", () => {
        <MemoryRouter>
            <SellProduct />
        </MemoryRouter>
    })

    test("Get_proposal button navigates to /get_proposal", () => {
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        );
        const getProposalButton = screen.getByText("I’m interested in hiring linokhan.com for a project");
        expect(getProposalButton.closest('a')).toHaveAttribute('href', '/get_proposal');
    });

    test("Apply button navigates to /apply", () => {
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        );
        const applyButton = screen.getByText("I’m interested in applying for a job a linokhan.com");
        expect(applyButton.closest('a')).toHaveAttribute('href', '/apply');
    });

    test("Sell button navigates to /sell", () => {
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        );
        const sellButton = screen.getByText("I’m interested in selling a product to linokhan.com");
        expect(sellButton.closest('a')).toHaveAttribute('href', '/sell');
    });

    test("Client button navigates to /client", () => {
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        );
        const clientButton = screen.getByText("I’m an existing client or past client of linokhan.com");
        expect(clientButton.closest('a')).toHaveAttribute('href', '/client');
    });


});


// Mock emailjs
jest.mock('@emailjs/browser', () => ({
    sendForm: jest.fn(),
}));

describe('Client component', () => {
    beforeEach(() => {
        emailjs.sendForm.mockClear();
    });

    test('renders the form fields correctly', () => {
        render(
            <Router>
                <PreviousClient />
            </Router>
        );
        expect(screen.getByLabelText(/First name/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last name/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email address/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Phone number/)).toBeInTheDocument();
        //expect(screen.getByLabelText(/Company name/)).toBeInTheDocument();
        //expect(screen.getByLabelText(/Webiste url/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/)).toBeInTheDocument();
    });

    test('handles input correctly', () => {
        render(
            <MemoryRouter>
                <PreviousClient />
            </MemoryRouter>
        );
        const firstNameInput = screen.getByLabelText(/First name/);
        const lastNameInput = screen.getByLabelText(/Last name/);
        const emailInput = screen.getByLabelText(/Email address/);
        const phoneInput = screen.getByLabelText(/Phone number/);
       /* const companyInput = screen.getByLabelText(/Company name/);
        const websiteInput = screen.getByLabelText(/Webiste url/);*/
        const messageInput = screen.getByLabelText(/Message/);

        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
        fireEvent.change(phoneInput, { target: { value: '+1234567890' } });
        /*fireEvent.change(companyInput, { target: { value: 'Example Co.' } });
        fireEvent.change(websiteInput, { target: { value: 'example.com' } });*/
        fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

        expect(firstNameInput.value).toBe('John');
        expect(lastNameInput.value).toBe('Doe');
        expect(emailInput.value).toBe('johndoe@example.com');
        expect(phoneInput.value).toBe('+1234567890');
        /*expect(companyInput.value).toBe('Example Co.');
        expect(websiteInput.value).toBe('example.com');*/
        expect(messageInput.value).toBe('Hello, this is a test message.');
    });


   /* test('submits the form correctly', async () => {
        emailjs.sendForm.mockResolvedValue({ text: 'message sent' });
    
        render(
          <MemoryRouter>
            <PreviousClient />
          </MemoryRouter>
        );
    
        const firstNameInput = screen.getByLabelText(/First name/);
        const lastNameInput = screen.getByLabelText(/Last name/);
        const emailInput = screen.getByLabelText(/Email address/);
        const phoneInput = screen.getByLabelText(/Phone number/);
        const companyInput = screen.getByLabelText(/Compay name/);
        const websiteInput = screen.getByLabelText(/Webiste url/);
        const messageInput = screen.getByLabelText(/Message/);
        const submitButton = screen.getByRole('button', { name: /Submit inquiry/ });
    
        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
        fireEvent.change(phoneInput, { target: { value: '+1234567890' } });
        fireEvent.change(companyInput, { target: { value: 'Example Co.' } });
        fireEvent.change(websiteInput, { target: { value: 'example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
    
        fireEvent.click(submitButton);
    
        expect(emailjs.sendForm).toHaveBeenCalledWith(
          'service_725gn2g',
          'template_gkzkq4u',
          expect.any(HTMLFormElement),
          'kLCfazak-ocrHLbKy'
        );
    
        await waitFor(() => expect(screen.getByText('Your message has been sent!')).toBeInTheDocument());
      });*/
});