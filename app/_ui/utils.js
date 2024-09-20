export const getToken = () => {
  const user = typeof window !== 'undefined' ? window.localStorage.getItem('user') : null;
  let headers = {};
  if (user) {
    let existedUser = JSON.parse(user);
    headers = {
      headers: { "Authorization": 'Token ' + existedUser.token }
    };
  }
  return headers;
};

export const setToken = (user) => {
  const newUser = JSON.stringify(user);
  localStorage.setItem('user', newUser);

};

export const removeToken = () => {
  localStorage.removeItem('user');
}

export const getUser = () => {
  const user = typeof window !== 'undefined' ? window.localStorage.getItem('user') : null;
  if (user) {
    return JSON.parse(user);
  }
  return {};
};

export const baseUrl = 'http://localhost:8000/';
