import { render, screen } from '@testing-library/react';
import SideNav from '@local/layouts/sideNav';
import { MemoryRouter as Router } from "react-router-dom";
import MainLayout from '@local/layouts/MainLayout';

describe('SideNav', () => {
    it('renders properly', () => {
        render(<Router>
            <SideNav isOpen={true} toggle={() => { }} />
        </Router>
        );
        const homeLink = screen.getByText('BOOKSHELF');
        expect(homeLink).toBeInTheDocument();
    });
});

describe('MainLayout', () => {
    it('renders properly', () => {
        render(
            <Router>
                <MainLayout>
                    <div>Test Child</div>
                </MainLayout>
            </Router>
        );

        const testChild = screen.getByText('Test Child');
        expect(testChild).toBeInTheDocument();
    });
})
