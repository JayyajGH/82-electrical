import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Projects from './page';
import { ComponentFactory } from '../../test/__factories__/ComponentFactory';

// Since Projects doesn't take props yet, we use an empty object.
class ProjectsFactory extends ComponentFactory<{}> {
  protected component = Projects;
  constructor() {
    super({});
  }
}

const factory = new ProjectsFactory();

// Mocking Next.js Image since it can be tricky in unit tests
vi.mock('next/image', () => ({
  default: ({ src, alt, fill }: any) => (
    <img src={src} alt={alt} data-fill={fill?.toString()} />
  ),
}));

// Mocking the Lightbox to simplify the DOM tree
vi.mock('yet-another-react-lightbox', () => ({
  default: ({ open, close, index }: any) => 
    open ? (
      <div data-testid="lightbox" data-index={index}>
        <button onClick={close}>Close</button>
      </div>
    ) : null,
}));

describe('Projects Component', () => {
  it('renders the main heading', () => {
    factory.render();
    expect(screen.getByRole('heading', { name: /previous work/i, level: 1 })).toBeInTheDocument();
  });

  it('renders all project items in the grid', () => {
    factory.render();
    
    // We check for some specific titles from your slides array
    expect(screen.getByText('Fault Finding')).toBeInTheDocument();
    expect(screen.getByText('Smart Home')).toBeInTheDocument();
    
    // Check that we have 9 project cards (based on your slides array length)
    const projectTitles = screen.getAllByRole('heading', { level: 3 });
    expect(projectTitles).toHaveLength(9);
  });

  it('opens the lightbox when a project card is clicked', () => {
    factory.render();

    // Find the first project card and click it
    const firstProject = screen.getByText('Fault Finding').closest('.group');
    fireEvent.click(firstProject!);

    // Check if our mocked lightbox appeared
    const lightbox = screen.getByTestId('lightbox');
    expect(lightbox).toBeInTheDocument();
    expect(lightbox).toHaveAttribute('data-index', '0');
  });

  it('closes the lightbox when the close handler is triggered', () => {
    factory.render();

    // Open it first
    const firstProject = screen.getByText('Fault Finding').closest('.group');
    fireEvent.click(firstProject!);
    
    // Click close in our mocked lightbox
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    // Lightbox should be gone
    expect(screen.queryByTestId('lightbox')).not.toBeInTheDocument();
  });

  it('matches snapshot', () => {
    expect(factory.snapshot()).toMatchSnapshot();
  });
});
