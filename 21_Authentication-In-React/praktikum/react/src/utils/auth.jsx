export const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("isLoggedIn");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
