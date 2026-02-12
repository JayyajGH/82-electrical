import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

export type ComponentFactoryOptions<P> = {
    props?: Partial<P>;
    attrs?: Record<string, any>; // For data-testids or aria-labels
};

export abstract class ComponentFactory<P extends Record<string, any>> {
    protected abstract component: (props: P) => ReactElement;
    protected defaultProps: P;

    constructor(defaultProps: P) {
        this.defaultProps = defaultProps;
    }

    /**
     * Creates the props by merging defaults with overrides
     */
    private createProps(overrides: Partial<P> = {}): P {
        return {
            ...this.defaultProps,
            ...overrides,
        };
    }

    /**
     * Renders the component for Vitest/Testing Library
     */
    render(options: ComponentFactoryOptions<P> = {}): RenderResult {
        const props = this.createProps(options.props);
        return render(this.component(props));
    }

    /**
     * Renders the component and returns the DocumentFragment for snapshot testing
     */
    snapshot(options: ComponentFactoryOptions<P> = {}): DocumentFragment {
        const { asFragment } = this.render(options);
        return asFragment();
    }
    
    /**
     * Just returns the props object (useful for unit testing hooks/logic)
     */
    getProps(overrides: Partial<P> = {}): P {
        return this.createProps(overrides);
    }
}