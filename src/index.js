import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import Routes from "./routes";
import "./index.css";

ReactDOM.render(
  <Grid container direction="row" justify="center" alignItems="center">
    <Grid item md={2}></Grid>
    <Grid
      item
      sm={8}
      md={8}
      lg={6}
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="mainApp"
    >
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </Grid>

    <Grid item md={2}></Grid>
  </Grid>,
  document.getElementById("root")
);
