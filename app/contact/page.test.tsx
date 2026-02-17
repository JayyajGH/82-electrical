import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './page';

describe('Contact Component', () => {
  
  it('renders the main heading', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
  });

  it('renders the email link with correct href', () => {
    render(<Contact />);
    const emailLink = screen.getByRole('link', { name: /andrew@82electrical.co.uk/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:andrew@82electrical.co.uk');
  });

  it('renders the phone link using its aria-label', () => {
    render(<Contact />);
    // Note: We search by the aria-label content here
    const phoneLink = screen.getByLabelText(/phone us on 0 7 8 1 3/i);
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+447813408135');
  });

  it('renders the Google Maps link with security attributes', () => {
    render(<Contact />);
    const mapLink = screen.getByRole('link', { name: /ambleside avenue/i });
    
    expect(mapLink).toHaveAttribute('href', expect.stringContaining('goo.gl/maps'));
    expect(mapLink).toHaveAttribute('target', '_blank');
    // Important for security when using target="_blank"
    expect(mapLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the coverage map iframe with an accessible title', () => {
    render(<Contact />);
    const iframe = screen.getByTitle(/coverage area map/i);
    
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d318417.5185058974!2d-2.783116!3d51.428097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3c8324a225142f6!2s82%20electrical!5e0!3m2!1sen!2suk!4v1664028702117!5m2!1sen!2suk');
    expect(iframe).toHaveAttribute('loading', 'lazy');
  });

});
