import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SocialIcon from './SocialIcon';

describe('SocialIcon Component', () => {
  it('renders a link with the correct destination', () => {
    render(<SocialIcon platform="facebook" path="https://facebook.com/test" />);
    
    // Find the link by its aria-label
    const link = screen.getByLabelText(/facebook/i);
    
    expect(link).toHaveAttribute('href', 'https://facebook.com/test');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('contains the correct title for accessibility', () => {
    render(<SocialIcon platform="instagram" path="https://instagr.am" />);
    
    const link = screen.getByTitle(/82Electrical on instagram/i);
    expect(link).toBeInTheDocument();
  });
});
