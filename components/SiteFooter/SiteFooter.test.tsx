import { screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SiteFooter from './SiteFooter';
import { ComponentFactory } from '../../test/__factories__/ComponentFactory';

class SiteFooterFactory extends ComponentFactory<{}> {
  protected component = SiteFooter;

  constructor() {
    super({});
  }
}

const factory = new SiteFooterFactory();

describe('SiteFooter Component', () => {
  it('renders the contact section with correct links and protocols', () => {
    factory.render();

    // Verify Email link
    const emailLink = screen.getByRole('link', { name: /andrew@82electrical.co.uk/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:andrew@82electrical.co.uk');

    // Verify Phone link
    const phoneLink = screen.getByRole('link', { name: /07813 408135/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+447813408135');

    // Verify Address/Map link with external security attributes
    const mapLink = screen.getByText(/Ambleside Avenue/i);
    expect(mapLink.closest('a')).toHaveAttribute('target', '_blank');
    expect(mapLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the social media section with correct platforms', () => {
    factory.render();

    // Check for the "Social" heading to ensure context
    expect(screen.getByRole('heading', { name: /social/i })).toBeInTheDocument();

    // Verify social icons are present (assuming SocialIcon renders an accessible element)
    // You can query by their platform names if SocialIcon uses them as labels
    const socialLinks = screen.getAllByRole('link');
    const socialHrefs = socialLinks.map(link => link.getAttribute('href'));

    expect(socialHrefs).toContain('https://g.co/kgs/8yUWFXC');
    expect(socialHrefs).toContain('https://www.facebook.com/profile.php?id=61555863644767');
  });

  it('matches the visual structure via snapshot', () => {
    // Captures the footer landmark and nested addresses for regression testing
    expect(factory.snapshot()).toMatchSnapshot();
  });
});
