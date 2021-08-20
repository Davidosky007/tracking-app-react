import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import store from "../redux/store";
import Header from "../containers/Header";

describe("Routes", () => {
  it("Should render name in the header", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    expect(screen.getByText("TrackLife")).toBeInTheDocument();
  });
  it("Should not show user if logged out", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    const menuAppbar = document.getElementById("menu-appbar");
    expect(menuAppbar).not.toBeInTheDocument();
  });
});
