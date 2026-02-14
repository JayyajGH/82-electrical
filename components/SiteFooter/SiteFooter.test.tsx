import { screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ComponentProps } from 'react';
import SiteFooter from './SiteFooter';
import { ComponentFactory } from '../../test/__factories__/ComponentFactory';

type SiteFooterProps = ComponentProps<typeof SiteFooter>;

/**
 * Factory for SiteFooter. 
 * Since SiteFooter doesn't currently take props, this mainly
 * provides a consistent interface for rendering and snapshotting.
 */
class SiteFooterFactory extends ComponentFactory<SiteFooterProps> {
  protected component = SiteFooter;

  constructor() {
    // SiteFooter doesn't take props, but we initialize with an empty object
    super({});
  }
}

const factory = new SiteFooterFactory();

describe('SiteFooter Component', () => {
  it('renders the contact section with correct links', () => {
    factory.render();

    const contactSection = screen.getByRole('contentinfo'); // <footer> element
    
    // Verify Email
    const emailLink = within(contactSection).getByText(/andrew@82electrical.co.uk/i);
    expect(emailLink).toHaveAttribute('href', 'mailto:andrew@82electrical.co.uk');

    // Verify Phone with specific Aria Label
    const phoneLink = screen.getByLabelText(/Phone us on 0 7 8 1 3/i);
    expect(phoneLink).toHaveAttribute('href', 'tel:+447813408135');

    // Verify Address/Map link
    const mapLink = screen.getByText(/Ambleside Avenue/i);
    expect(mapLink).toHaveAttribute('target', '_blank');
    expect(mapLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the social media section with all platforms', () => {
    factory.render();

    // We search for the heading to ensure the section exists
    expect(screen.getByRole('heading', { name: /social/i })).toBeInTheDocument();

    // Since SocialIcon likely renders a link with an aria-label (per your previous example)
    // We check for the presence of the expected platforms
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/google/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    // Useful for catching unintended HTML structure changes in the footer
    expect(factory.snapshot()).toMatchSnapshot();
  });
});
