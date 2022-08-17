import { render, screen } from '@testing-library/react';
import IndexPage from '@internal/pages/index';
import '@testing-library/jest-dom';

describe('Index page', () => {
  test('renders a heading', () => {
    render(<IndexPage />);

    const heading = screen.getByRole('heading', {
      name: /next-mui-contentful-app/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
