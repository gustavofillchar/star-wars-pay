import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterList from './filter-list';
import { useFilterPlanet } from '@/app/contexts/PlanetsFilterContext';
import { Planet } from '@/app/types/planet-types';

jest.mock('@/app/contexts/PlanetsFilterContext');

const mockUseFilterPlanet = useFilterPlanet as jest.MockedFunction<typeof useFilterPlanet>;

describe('FilterList', () => {
    beforeEach(() => {
        mockUseFilterPlanet.mockReturnValue({
            filter: '',
            setFilter: jest.fn(),
        });
    });

    it('renders FilterList component', () => {
        render(<FilterList planets={[]} />);
        expect(screen.getByText('Filter By:')).toBeInTheDocument();
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Clear all' })).toBeInTheDocument();
    });

    it('disables the "Clear all" button when there is no filter', () => {
        render(<FilterList planets={[]} />);

        const clearButton = screen.getByRole('button', { name: 'Clear all' });
        expect(clearButton).toBeDisabled();
    });

});
