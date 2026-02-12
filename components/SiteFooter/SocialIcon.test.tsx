import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ComponentProps } from 'react';
import SocialIcon from './SocialIcon';
import { ComponentFactory } from '../../test/__factories__/ComponentFactory';

type SocialIconProps = ComponentProps<typeof SocialIcon>;

class SocialIconFactory extends ComponentFactory<SocialIconProps> {
  protected component = SocialIcon;

  constructor() {
    super({
      platform: 'facebook',
      path: 'https://facebook.com/test',
    });
  }
}

// 1. Create an instance of your factory
const factory = new SocialIconFactory();

describe('SocialIcon Component', () => {
  it('renders a link with the correct destination', () => {
    // 2. No props needed here! It uses the defaults from the constructor.
    factory.render();
    
    const link = screen.getByLabelText(/facebook/i);
    
    expect(link).toHaveAttribute('href', 'https://facebook.com/test');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('contains the correct title for accessibility', () => {
    // 3. Only pass what you want to change.
    factory.render({
      props: { platform: 'instagram', path: 'https://instagr.am' }
    });
    
    const link = screen.getByTitle(/82Electrical on instagram/i);
    expect(link).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    expect(factory.snapshot()).toMatchSnapshot();
  });
});
