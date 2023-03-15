import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from '@remix-run/router';
import { screen } from '@testing-library/react';
import Store from '../components/Store';
import '@testing-library/jest-dom'

describe('Show Cart', () => {
    it('Should display cart when \'show cart\' button is pressed', () => {
        const history = createMemoryHistory({ initialEntries: ['/store'] });
        render(
            <Router location={history.location} navigator={history}>
                <Store />
            </Router>
        );
        userEvent.click(screen.getByRole('button', { name: /show cart/i}));
        expect(screen.getByText(/my awesome cart/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name:/close cart/i })).toBeInTheDocument();
    });
    
    it('Should close cart when \'close cart\' button is pressed', () => {
        const history = createMemoryHistory({ initialEntries: ['/store'] });
        render(
            <Router location={history.location} navigator={history}>
                <Store />
            </Router>
        );
        userEvent.click(screen.getByRole('button', { name: /show cart/i}));
        userEvent.click(screen.getByRole('button', { name: /close cart/i}));
        expect(screen.queryByText(/cart/i)).not.toBeInTheDocument();
    });
})