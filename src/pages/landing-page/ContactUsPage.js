import React from 'react';
import NavigationBar from '../../components/landing-page/Navbar';
import ContactUs from '../../components/contact-us/ContactUs';
import Footer from '../../components/landing-page/Footer';

const ContactUsPage = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0">
        <NavigationBar />
      </div>
      <div className="mx-auto mt-[7rem]">
        <ContactUs />
      </div>
      <div className="mt-[9rem] min-[410px]:mt-[15rem] md:mt-[26rem] lg:mt-[6rem]">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;
