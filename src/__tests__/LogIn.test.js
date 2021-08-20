// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { Provider } from "react-redux";

// import { MemoryRouter } from "react-router-dom";
// import store from "../redux/store";
// import Routes from "../routes";
// import { userData } from "../redux/actions";

// const clearStorage = () => {
//   localStorage.clear("tokenObj");
//   userData({
//     isLoggedIn: false,
//     userToken: "",
//     userInfo: "",
//     userId: "",
//   });
// };

// describe("LogIn", () => {
//   it("Should log in user", async () => {
//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <Routes />
//         </MemoryRouter>
//       </Provider>
//     );
//     clearStorage();

//     const random_name = "test";
//     const random_email = "test@gmail.com";
//     const userPassword = "123123";

//     const submitButtonLogIn = screen.getByText("Log in");
//     fireEvent.change(screen.getByPlaceholderText("Email"), {
//       target: { value: random_email },
//     });
//     fireEvent.change(screen.getByPlaceholderText("Password"), {
//       target: { value: userPassword },
//     });

//     fireEvent.click(submitButtonLogIn);
//     await waitFor(async () => {
//       expect(
//         screen.getByText(`${random_name}'s Measurements:`)
//       ).toBeInTheDocument();
//       clearStorage();
//     });
//   });
// });
