import base from './baseUrl';

const login = async (name, password, endpoint) => {
  const credentials = {
    name,
    password,
  };
  const response = fetch(`${base}/${endpoint}`, {
    mode: 'cors',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((r) => r.json());
  return response;
};

const isLoggedIn = () => {
  if (localStorage.token) return true;
  return false;
};

const logout = () => {
  localStorage.clear();
};

export { login, isLoggedIn, logout };
