import { render } from '@testing-library/react';
import Home from '../components/Home';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from '@remix-run/router';

describe('Homepage Elements', () => {
    it('Contains three blocks of text inside terminal', () => {
        const history = createMemoryHistory({ initialEntries: ['/home'] });
        const { container } = render(
            <Router location={history.location} navigator={history}>
                <Home selected='home' />
            </Router>
        );
        expect(container).toMatchSnapshot();
    });
});