import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SiteHeader from './SiteHeader';

describe('SiteHeader Component', () => {
  
  it('renders the skip link for accessibility', () => {
    render(<SiteHeader />);
    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main');
  });

  it('renders the logo linking to the homepage', () => {
    render(<SiteHeader />);
    // The logo uses an aria-label on a span, so we find the link by its title or label
    const logoLink = screen.getByRole('link', { name: /82electrical/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders the navigation menu with correct links', () => {
    render(<SiteHeader />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();

    // Define the expected links to keep the test clean
    const links = [
      { name: /home/i, href: '/' },
      { name: /previous work/i, href: '/projects' },
      { name: /contact/i, href: '/contact' },
    ];

    links.forEach(({ name, href }) => {
      const link = screen.getByRole('link', { name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });

  it('contains the hero background decorative element', () => {
    const { container } = render(<SiteHeader />);
    // Since the hero is an empty div with a class, we check for its presence via the container
    // Note: It's usually better to test content, but for layout-heavy headers, this ensures the structure remains.
    const heroDiv = container.querySelector('[class*="hero"]');
    expect(heroDiv).toBeInTheDocument();
  });
});
