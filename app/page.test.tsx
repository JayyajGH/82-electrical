import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from './page';

// Mock Next.js Image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe('Home Page', () => {

  it('renders the "About us" section with all paragraphs', () => {
    render(<Home />);
    
    // Check for the section heading
    expect(screen.getByRole('heading', { level: 2, name: /about us/i })).toBeInTheDocument();

    // Check for specific text content to ensure the map function worked
    expect(screen.getByText(/domestic electrical services for Bristol/i)).toBeInTheDocument();
    expect(screen.getByText(/future-proof, we design around your long-term needs/i)).toBeInTheDocument();
  });

  it('renders the "What we do" section with the correct heading level', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 2, name: /what we do/i })).toBeInTheDocument();
  });

  it('renders exactly three service items', () => {
    render(<Home />);
    // Since services are inside an <ul>, we check for list items
    const serviceItems = screen.getAllByRole('listitem');
    expect(serviceItems).toHaveLength(3);
  });

  it('displays the correct service titles and descriptions', () => {
    render(<Home />);
    
    const services = [
      { title: 'Rewires', text: /full rewire is often the safest path/i },
      { title: 'Fault finding', text: /immediate advice over the phone/i },
      { title: 'Lighting', text: /transform your garden with outdoor LEDs/i },
    ];

    services.forEach(({ title, text }) => {
      // Check for the H2 titles within the service items (rendered as heading3 class but <h2> tag)
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('renders icons as decorative elements (hidden from screen readers)', () => {
    const { container } = render(<Home />);
    
    // Look for the images physically in the DOM using a selector
    const images = container.querySelectorAll('img');
    
    expect(images).toHaveLength(3);
    images.forEach(img => {
        expect(img).toHaveAttribute('alt', '');
    });
  });

});
