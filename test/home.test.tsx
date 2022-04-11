import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import renderWithRouter from "mocks/renderWithRouter";

import Index from "pages/";

describe("Index page", () => {
  test("Exist link & router loaded?", () => {
    render(<Index />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Welcome/ig)).toBeInTheDocument();
  });
  test("Rendered page", () => {
    renderWithRouter(<Index />, { route: "/" });
    expect(screen.getByText(/Welcome/ig)).toBeInTheDocument();
  });
})
