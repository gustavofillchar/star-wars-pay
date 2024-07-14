import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
  it('Should be renders the title and description correctly', () => {
    const title = 'Test Title';
    const description = 'Test Description';

    render(<Header title={title} description={description} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});