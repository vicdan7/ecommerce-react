import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthentication from "../hooks/useAuthentication";
import Loading from "../components/shared/Loading";
import Modal from "../components/shared/Modal";
import "./styles/login.css";

const Login = () => {
  const { loginUser } = useAuthentication();
  const navigate = useNavigate(); //
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const callback = (openModal) => {
    if (openModal) {
      setShowModal(true);
    } else {
      navigate("/");
    }
  }; //

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    try {
      const tokenResponse = await loginUser(data); //
      localStorage.setItem("token", tokenResponse?.data?.token);
      callback(true);
    } catch (error) {
      localStorage.removeItem("token");
    }
    setLoading(false);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      callback();
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="login__container">
          <h2 className="login__greeting">
            Welcome! Enter your email and password to continue
          </h2>
          <form className="login__form" onSubmit={handleLogin}>
            <div className="login__email">
              <label className="login__label" htmlFor="email">
                Email:
              </label>
              <input className="login__input" type="email" id="email" />
            </div>
            <div className="login__password">
              <label className="login__label" htmlFor="password">
                Password:
              </label>
              <input className="login__input" type="password" id="password" />
            </div>
            <button className="login__btn">Sign in</button>
          </form>
          <h3 className="login__linkRegister">
            Don´t havean account? <Link to={"/register"}>Sing up</Link>
          </h3>
          <Modal showModal={showModal} onClose={closeModal}>
            <h3> Hello! welcome</h3>
            <button className="login__btn-modal" onClick={closeModal}>
              Ok
            </button>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Login;
