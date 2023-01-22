/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = ({ handleLogin }) => {
  const { inputLogin, setInputLogin } = useContext(GlobalContext);

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const { email, password } = inputLogin;

    if (password.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be more than 7 digits!',
        footer: 'Please check your password again!',
      });
      return;
    }

    handleLogin({ email, password });

    setInputLogin(() => {
      return {
        email: '',
        password: '',
      };
    });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputLogin({ ...inputLogin, [name]: value });
  };

  return (
    <div className=" mx-auto flex flex-col max-w-xs md:max-w-md px-4 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="font-semibold self-center mb-1 text-xl  text-gray-600 sm:text-2xl dark:text-white">
        Login to Loker.id
      </div>
      <div className="mt-8">
        <form onSubmit={onSubmitLogin}>
          <div className="flex flex-col mb-2">
            <div>
              <input
                type="text"
                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your email"
                name="email"
                value={inputLogin.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <div>
              <input
                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your password"
                type="password"
                name="password"
                value={inputLogin.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center mt-6">
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          You don't have an account?
          <a
            href="#"
            target="_blank"
            className="text-sm text-purple-600 font-medium"
          >
            <Link to="/signup"> Signup here!</Link>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;
