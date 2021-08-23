/* eslint-disable no-undef */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import store from "../redux/store";
import Routes from "../routes";
import { userData } from "../redux/actions";
import { saveToken, signInUser } from "../api-requests";
import jwt from "jwt-decode";

const num = Math.floor(Math.random() * 5000);
const random_name = num.toString();
const random_email = num.toString() + "@gmail.com";
const userPassword = "123123";

const clearStorage = () => {
  localStorage.clear("tokenObj");
  userData({
    isLoggedIn: false,
    userToken: "",
    userInfo: "",
    userId: "",
  });
};
describe("SignIn", () => {
  it("Should sign in user", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
    clearStorage();

    const data = await signInUser({
      name: random_name,
      email: random_email,
      password: userPassword,
      password_confirmation: userPassword,
    });

    if (data && data.statusText === "OK") {
      saveToken(data.data.auth_token);
      userData({
        isLoggedIn: true,
        userToken: data.data.auth_token,
        userInfo: jwt(data.data.auth_token).name,
        userId: jwt(data.data.auth_token).user_id,
      });
    }

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: random_email },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: userPassword },
    });

    const submitButtonLogIn = screen.getByText("Log in");
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: random_email },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: userPassword },
    });
    fireEvent.click(submitButtonLogIn);
    await waitFor(async () => {
      expect(
        screen.getByText(`${random_name}'s Measurements:`)
      ).toBeInTheDocument();
    });
    clearStorage();
  }, 100000);
});
