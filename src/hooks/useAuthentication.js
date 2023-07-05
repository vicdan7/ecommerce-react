import axios from "axios";

const useAuthentication = () => {
  const createNewUser = (data) => {
    const URL_BASE = import.meta.env.VITE_REACT_APP_URL  //
    const url = `${URL_BASE}users`;  //
    axios
      .post(url, data)
      .then((res) => res)
      .catch((err) => console.error(err));
  };
  const loginUser = (data) => {
    const URL_BASE = import.meta.env.VITE_REACT_APP_URL  //
    const url = `${URL_BASE}users/login`;  //
    return axios.post(url, data);
  };

  return { createNewUser, loginUser };
};

export default useAuthentication;
