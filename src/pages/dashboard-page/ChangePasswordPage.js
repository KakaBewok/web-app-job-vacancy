import React from 'react';
import { changePassword } from '../../utils/api-data';
import NavigationBar from '../../components/landing-page/Navbar';
import ChangePassword from '../../components/change-password/ChangePassword';
import Footer from '../../components/landing-page/Footer';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { Spinner } from 'flowbite-react';

const ChangePasswordPage = () => {
  const HandleChangePassword = async (newPassword) => {
    try {
      const { error } = await changePassword(newPassword);
      if (!error) {
        Swal.fire('Success', 'Change Password success!', 'success');

        Cookies.remove('token');
        Cookies.remove('name');
        Cookies.remove('image_url');

        <Spinner aria-label="Extra large spinner example" size="xl" />;

        window.location = '/login';
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Change Password Failed!',
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
        <ChangePassword handleChangePassword={HandleChangePassword} />
      </div>
      <div className="mt-[9rem] min-[410px]:mt-[15rem] md:mt-[26rem] lg:mt-[6rem]">
        <Footer />
      </div>
    </div>
  );
};

export default ChangePasswordPage;
