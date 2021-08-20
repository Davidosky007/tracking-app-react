import axios from "axios";
import { measureData, userData } from "../redux/actions";
import jwt from "jwt-decode";
import store from "../redux/store";

const URL = "https://tracklyfe.herokuapp.com";

export const changeToken = () => {
  const token = store.getState().userStore.userToken.token;
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
};

export const logInUser = async (data) => {
  return await axios({
    url: `${URL}/auth/login`,
    data: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res)
    .catch((err) => err.response);
};

export const signInUser = async (data) => {
  return await axios({
    url: `${URL}/signup`,
    data: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res)
    .catch((err) => err.response);
};

export const getMeasurements = async (measureData) => {
  await axios
    .get(`${URL}/measurements`)
    .then(function (response) {
      store.dispatch(measureData({ dataInfo: response.data }));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const addMeasurement = async (
  userId,
  fetchRequested,
  setFetchRequested,
  inputValue
) => {
  await axios({
    url: `${URL}/measurements`,
    data: {
      name: inputValue,
      created_by: userId,
    },
    method: "POST",
  })
    .then(function (response) {
      setFetchRequested(!fetchRequested);
    })
    .catch((error) => {
      return error;
    });
};
export const removeMeasurement = async (
  id,

  fetchRequested,
  setFetchRequested
) => {
  await axios({
    url: `${URL}/measurements/${id}`,
    method: "DELETE",
  })
    .then(function (response) {
      setFetchRequested(!fetchRequested);
    })
    .catch((error) => {
      return error;
    });
};

export const addMeasure = async (
  id,

  setFetchRequested,
  fetchRequested,
  inputValue
) => {
  await axios({
    url: `${URL}/measurements/${id}/measures`,
    data: { value_of_measure: inputValue, measurement_id: id },
    method: "POST",
  })
    .then(function (response) {
      setFetchRequested(!fetchRequested);
    })
    .catch((error) => {
      return error;
    });
};
export const updateMeasure = async (
  data,

  setFetchRequested,
  fetchRequested,
  inputValue
) => {
  await axios({
    url: `${URL}/measurements/${data.measurement_id}/measures/${data.id}`,
    data: { value_of_measure: inputValue, measurement_id: data.id },
    method: "PATCH",
  })
    .then(function (response) {
      setFetchRequested(!fetchRequested);
    })
    .catch(function (error) {
      return error;
    });
};

export const deleteMeasure = async (
  data,
  setFetchRequested,
  fetchRequested
) => {
  await axios({
    url: `${URL}/measurements/${data.measurement_id}/measures/${data.id}/`,
    method: "DELETE",
  })
    .then(function (response) {
      setFetchRequested(!fetchRequested);
    })
    .catch((error) => {
      return error;
    });
};

export const checkToken = () => {
  const NOW = Date.now();

  const cachedToken = JSON.parse(localStorage.getItem("tokenObj"));
  if (cachedToken && cachedToken.expiresAt < NOW) {
    localStorage.removeItem("tokenObj");
    return false;
  }
  if (!cachedToken) return false;
  return true;
};

export const saveToken = (data) => {
  const NOW = Date.now();
  const tokenObj = {
    token: data.data.auth_token,
    expiresAt: NOW + 86400000,
  };
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("tokenObj", JSON.stringify(tokenObj));
  localStorage.setItem("userInfo", jwt(data.data.auth_token).name);
  localStorage.setItem(
    "userId",
    JSON.stringify(jwt(data.data.auth_token).user_id)
  );
};

export const signOut = (history) => {
  localStorage.clear();
  // axios.defaults.headers.common["Authorization"] = null;
  delete axios.defaults.headers.common["Authorization"];
  store.dispatch(
    userData({
      isLoggedIn: false,
      userToken: "",
      userInfo: "",
      userId: "",
    })
  );
  store.dispatch(measureData({}));
  history.push("/");
};
