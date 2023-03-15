import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import Nav from "../components/Nav";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";
import { screen } from "@testing-library/react";

describe('Nav Routing', () => {
    it('should route from home to store when clicking store link', () => {
        const history = createMemoryHistory({ initialEntries: ['/home'] });
        render(
            <Router location={history.location} navigator={history}>
                <Nav selected="Home" />
            </Router>
        );
        expect(history.location.pathname).toBe('/home');
        userEvent.click(screen.getByText(/store/i));
        expect(history.location.pathname).toBe('/store');
    });

    it('should route from store to home when clicking home link', () => {
        const history = createMemoryHistory({ initialEntries: ['/store'] });
        render(
            <Router location={history.location} navigator={history}>
                <Nav selected="store" />
            </Router>
        );
        expect(history.location.pathname).toBe('/store');
        userEvent.click(screen.getByText(/home/i));
        expect(history.location.pathname).toBe('/home');
    });
});

describe('Nav Structure', () => {
    it('Should display heading and links', () => {
        const history = createMemoryHistory({ initialEntries: ['/store'] });
        const { container } = render(
            <Router location={history.location} navigator={history}>
                <Nav selected="store" />
            </Router>
        );
        expect(container).toMatchSnapshot();
    });
});