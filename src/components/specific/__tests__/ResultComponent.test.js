import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultComponent from '../ResultComponent';
import { MemoryRouter } from 'react-router-dom';

describe('Result Component', ()=>{

    beforeEach(()=>{
        render(
            <MemoryRouter>
                <ResultComponent/>
            </MemoryRouter>
        )
    })
    // Renders test
    test('renders Result Component without crashing', ()=>{

    });

    test('renders Scroller Header section', ()=>{
        expect(screen.getByText(/Over the past years, we have delivered measurable results for various businesses./)).toBeInTheDocument();
    });

});