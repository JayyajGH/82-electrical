import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './page';
import { ComponentFactory } from '../../test/__factories__/ComponentFactory';

class ContactFactory extends ComponentFactory<{}> {
  protected component = Contact;

  constructor() {
    super({});
  }
}

const factory = new ContactFactory();

describe('Contact Page Component', () => {
  it('renders the contact heading', () => {
    factory.render();
    expect(screen.getByRole('heading', { name: /contact us/i, level: 2 })).toBeInTheDocument();
  });

  it('contains valid communication links with correct protocols', () => {
    factory.render();

    // Verify Email
    const emailLink = screen.getByRole('link', { name: /andrew@82electrical.co.uk/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:andrew@82electrical.co.uk');

    // Verify Phone
    const phoneLink = screen.getByRole('link', { name: /07813 408135/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+447813408135');
  });

  it('renders the address link with proper external security attributes', () => {
    factory.render();

    const addressLink = screen.getByText(/Ambleside Avenue/i);
    const anchor = addressLink.closest('a');
    
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    expect(anchor).toHaveAttribute('href', 'https://goo.gl/maps/w1DEYMjpH37A4bV96');
  });

  it('renders the coverage map iframe with an accessible title', () => {
    factory.render();

    const iframe = screen.getByTitle(/coverage area map/i);
    expect(iframe).toBeInTheDocument();
    // Corrected to match your component's /0 suffix
    expect(iframe).toHaveAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d318417.5185058974!2d-2.783116!3d51.428097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3c8324a225142f6!2s82%20electrical!5e0!3m2!1sen!2suk!4v1664028702117!5m2!1sen!2suk');
    expect(iframe).toHaveAttribute('loading', 'lazy');
  });

  it('matches snapshot', () => {
    expect(factory.snapshot()).toMatchSnapshot();
  });
});
