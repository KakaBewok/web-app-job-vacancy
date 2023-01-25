import React from 'react';
import { login } from '../../utils/api-data';
import NavigationBar from '../../components/landing-page/Navbar';
import Login from '../../components/login/Login';
import Footer from '../../components/landing-page/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginPage = () => {
  const navigate = useNavigate();

  const HandleLogin = async (user) => {
    try {
      const { error, data } = await login(user);
      if (!error) {
        let { token, user } = data.data;

        Cookies.set('token', token, { expires: 3 });
        Cookies.set('image_url', user.image_url, { expires: 3 });
        Cookies.set('name', user.name, { expires: 3 });

        navigate('/dashbord');
        window.location = '/dashboard';
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credentials wrong!',
        footer: 'Please try again!',
      });
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0">
        <NavigationBar />
      </div>
      <div className="mt-[9rem]">
        <Login handleLogin={HandleLogin} />
      </div>
      <div className="mt-[9rem] min-[410px]:mt-[15rem] md:mt-[26rem] lg:mt-[6rem]">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
