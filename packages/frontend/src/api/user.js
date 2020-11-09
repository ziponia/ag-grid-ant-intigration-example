import $http from "./client";

const users = () => {
  return $http.get(`/users`);
};

export default {
  users,
};
