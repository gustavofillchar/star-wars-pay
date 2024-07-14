import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FeedCharacters from './feed-characters-list';
import { useFilterPlanet } from '@/app/contexts/PlanetsFilterContext';
import api from '@/app/services/api';
 
jest.mock('@/app/contexts/PlanetsFilterContext');
jest.mock('@/app/services/api');

const mockUseFilterPlanet = useFilterPlanet as jest.MockedFunction<typeof useFilterPlanet>;
const mockApiGet = api.get as jest.MockedFunction<typeof api.get>;

describe('FeedCharacters', () => {
  const initialPeople = {
    next: 'https://swapi.dev/api/people/?page=2',
    results: [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        homeworld: 'https://swapi.dev/api/planets/1/',
        gender: 'male',
      },
    ],
  };

  beforeEach(() => {
    mockUseFilterPlanet.mockReturnValue({
        filter: '',
        setFilter: function (homeworld: string): void {
            throw new Error('Function not implemented.');
        }
    });
    mockApiGet.mockResolvedValue({
      data: {
        next: 'https://swapi.dev/api/people/?page=3',
        results: [
          {
            name: 'Darth Vader',
            height: '202',
            mass: '136',
            homeworld: 'https://swapi.dev/api/planets/1/',
            gender: 'male',
          },
        ],
      },
    });
  });

  it('renders initial characters correctly', () => {
    render(<FeedCharacters initialPeople={initialPeople} />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Height • 172')).toBeInTheDocument();
    expect(screen.getByText('Mass • 77')).toBeInTheDocument();
    expect(screen.getByText('Gender • male')).toBeInTheDocument();
  });

  it('loads more characters when clicking the load more button', async () => {
    render(<FeedCharacters initialPeople={initialPeople} />);

    const loadMoreButton = screen.getByText('Load more');
    fireEvent.click(loadMoreButton);

    expect(mockApiGet).toHaveBeenCalledWith('https://swapi.dev/api/people/?page=2');

    await waitFor(() => {
      expect(screen.getByText('Darth Vader')).toBeInTheDocument();
      expect(screen.getByText('Height • 202')).toBeInTheDocument();
      expect(screen.getByText('Mass • 136')).toBeInTheDocument(); 
    });
 
    const genderElements = screen.getAllByText('Gender • male');
    expect(genderElements.length).toBe(2);
  });

  it('filters characters based on homeworld filter', () => {
    mockUseFilterPlanet.mockReturnValue({
        filter: 'https://swapi.dev/api/planets/2/',
        setFilter: function (homeworld: string): void {
            throw new Error('Function not implemented.');
        }
    });

    render(<FeedCharacters initialPeople={initialPeople} />);
 
    expect(screen.getByText('There are no characters loaded from the selected homeworld.')).toBeInTheDocument();
  });
});
