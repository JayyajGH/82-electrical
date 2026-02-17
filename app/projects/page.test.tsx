import { render, screen, fireEvent, within } from "@testing-library/react"; // Added within
import { describe, it, expect, vi } from "vitest";
import Projects from "./page";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe("Projects Component", () => {
  
  // ... (previous tests for heading and grid remain the same)

  it("opens the lightbox when a project is clicked", async () => {
    render(<Projects />);
    
    // 1. Click the first project card
    const firstProjectCard = screen.getByText("Fault Finding");
    fireEvent.click(firstProjectCard);

    // 2. Find the Lightbox. 
    // 'yet-another-react-lightbox' uses role="dialog" or a presentation role.
    // If getByRole('dialog') fails, we can use the specific class or label.
    const lightbox = await screen.findByRole("dialog"); 
    
    // 3. Search ONLY inside the lightbox for the description
    const description = within(lightbox).getByText(/This fault was found after the customer called/i);
    
    expect(description).toBeInTheDocument();
    expect(lightbox).toBeInTheDocument();
  });
});
