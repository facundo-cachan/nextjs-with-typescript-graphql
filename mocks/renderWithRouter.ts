import { ReactElement, JSXElementConstructor } from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export default (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  { route = "/" } = {}
) => {
  window.history.pushState({}, "", route);
  return render(ui, { wrapper: BrowserRouter });
};