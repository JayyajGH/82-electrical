import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SiteFooter from './SiteFooter';

describe('SiteFooter', () => {
  it('should render the contact and social sections correctly', () => {
    render(<SiteFooter />);
    
    // Check if the email is rendered
    expect(screen.getByText('andrew@82electrical.co.uk')).toBeInTheDocument();
    
    // Check if the phone number is rendered
    expect(screen.getByText('07813 408135')).toBeInTheDocument();
    
    // Verify the address link
    const addressLink = screen.getByText(/Ambleside Avenue/i);
    expect(addressLink.closest('a')).toHaveAttribute('target', '_blank');

    // Check for unique landmarks
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /social/i })).toBeInTheDocument();
  });
});
