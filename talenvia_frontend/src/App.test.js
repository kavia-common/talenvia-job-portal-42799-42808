import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Job Listings page title", () => {
  render(<App />);
  const title = screen.getByText(/Job Listings/i);
  expect(title).toBeInTheDocument();
});
