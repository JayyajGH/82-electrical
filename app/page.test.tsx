import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from './page';

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe('Home Page', () => {

  it('renders main section headings as H2', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 2, name: /about us/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /why choose us/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /what we do/i })).toBeInTheDocument();
  });

  it('renders service titles as H3 for proper hierarchy', () => {
    render(<Home />);
    // This will pass once you change your page.tsx service titles to <h3>
    expect(screen.getByRole('heading', { level: 3, name: /rewires/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /fault finding/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /lighting/i })).toBeInTheDocument();
  });

  it('renders exactly three service items in a list', () => {
    render(<Home />);
    const serviceItems = screen.getAllByRole('listitem');
    expect(serviceItems).toHaveLength(3);
  });

  it('ensures service icons are decorative', () => {
    render(<Home />);
    // Using getAllByRole('img') is cleaner than querySelector
    const images = screen.getAllByRole('presentation', { hidden: true }).filter(el => el.tagName === 'IMG');
    
    // Alternative: just check for empty alts on the images
    const icons = screen.getAllByAltText('');
    expect(icons.length).toBeGreaterThanOrEqual(3); 
  });

  it('contains the NAPIT verification link', () => {
    render(<Home />);
    const link = screen.getByRole('link', { name: /verify 82 electrical napit registration/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', expect.stringContaining('napit.org.uk'));
  });
});

