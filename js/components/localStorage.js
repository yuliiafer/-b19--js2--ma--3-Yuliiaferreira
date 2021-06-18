const tokenKey = "token";

const userKey = "user";

export function saveToken(token) {
  toStorage(tokenKey, token);
}

export function getToken() {
  return fromStorage(tokenKey);
}

export function saveUser(user) {
  toStorage(userKey, user);
}

export function getUser() {
  const user = fromStorage(userKey);

  if (user) {
    return user.username;
  }
  return null;
}

function toStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function fromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }

  return JSON.parse(value);
}
