import React from 'react';
import { register } from '../../utils/api-data';
import NavigationBar from '../../components/landing-page/Navbar';
import Footer from '../../components/landing-page/Footer';
import Signup from '../../components/sign-up/Signup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const SignupPage = () => {
  const navigate = useNavigate();

  const HandleRegister = async (user) => {
    try {
      const { error } = await register(user);
      if (!error) {
        Swal.fire('Success', 'Registration success!', 'success');
        <Spinner aria-label="Extra large spinner example" size="xl" />;
        navigate('/login');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The email has already been taken.',
        footer: 'Please check your email again!',
      });
    }
  };

  return (
    <div className="dark:bg-gray-700">
      <div className="fixed top-0 left-0 right-0 ">
        <NavigationBar />
      </div>
      <div className="pt-[7rem] md:pt-[10rem]">
        <Signup handleRegister={HandleRegister} />
      </div>
      <div className="mt-[5rem] md:mt-[9.5rem] min-[819px]:mt-[19rem] lg:mt-[6rem]">
        <Footer />
      </div>
    </div>
  );
};
export default SignupPage;
