import React from "react";
import { render, screen } from "@testing-library/react";
import CoreValuesComponent from "../CoreValuesComponent";
import { MemoryRouter } from "react-router-dom";

describe('Core Values Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <CoreValuesComponent />
            </MemoryRouter>
        );

    });

    // Renders test
    test('renders Core Values Component without crashing', () => {

    });

    test('renders Title Section', () => {
        expect(screen.getByText(/Our Culture, Values, and Beliefs/)).toBeInTheDocument();
    });

    /*test('renders Value Section', () => {
        const coreValues = [
            { title: 'Integrity', description: 'We uphold the highest standards of integrity in all of our actions.' },
            { title: 'Customer Commitment', description: 'We develop relationships that make a positive difference in our clients lives.' },
            { title: 'Quality', description: 'We provide outstanding service that, together, deliver premium value to our clients.' },
            { title: 'Teamwork', description: 'We work together, across boundaries, to meet the needs of our customers and to help the company win.' },
            { title: 'Respect for People', description: 'We value our people, encourage their development and reward their performance.' },
            { title: 'Detail Oriented', description: 'Attention to detail is paramount in our approach. We meticulously plan and execute every aspect of our projects, ensuring precision and accuracy. ' },
            { title: 'A Will to Win', description: 'We exhibit a strong will to win in the marketplace and in every aspect of our business.' },
            { title: 'Personal Accountability', description: 'We are personally accountable for delivering on our commitments.' }
        ];

        coreValues.forEach(value => {
            expect(screen.getByText(value.title)).toBeInTheDocument();
            expect(screen.getByText(value.description)).toBeInTheDocument();
        });
    });*/
})