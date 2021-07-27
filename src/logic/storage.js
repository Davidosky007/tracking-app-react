const saveToken = (token) => {
  localStorage.token = JSON.stringify(token);
};

const loadToken = () => {
  const token = JSON.parse(localStorage.token);
  return token;
};

export { saveToken, loadToken };
