import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiousSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiousSecure = () => {
  const {logOut} = useContext(AuthContext)
  const navigate = useNavigate()
  //call interceptors for every api call
  axiousSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiousSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
     
      const status = error.response.status;
     console.log("error is ", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate('/')
      }
      return Promise.reject(error);
    }
  );

  return axiousSecure;
};

export default useAxiousSecure;
