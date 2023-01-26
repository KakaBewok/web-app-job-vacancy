/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import NavigationBar from '../../components/landing-page/Navbar';
import CreateJobVacancy from '../../components/dashboard/CreateJobVacancy';
import Footer from '../../components/landing-page/Footer';
import { addJob, editJob } from '../../utils/api-data';
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateJobVacancyPage = () => {
  const { inputJob, setInputJob, currentId, setCurrentId } =
    useContext(GlobalContext);

  const ChangeInputJobHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInputJob({ ...inputJob, [name]: value });
  };

  const HandleAddJob = async (jobData) => {
    try {
      const { error } = await addJob(jobData);

      if (!error) {
        Swal.fire('Success', 'Add data success!', 'success');

        window.location = '/dashboard/list-job-vacancy';
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Add job failed!',
        footer: 'Please try again!',
      });
      console.log(error.message);
    }
  };
  const HandleEditJob = async (jobEditData) => {
    try {
      const { error } = await editJob(jobEditData);

      if (!error) {
        Swal.fire('Success', 'Edit data success!', 'success');

        window.location = '/dashboard/list-job-vacancy';
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Edit job failed!',
        footer: 'Please try again!',
      });
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 ">
        <NavigationBar />
      </div>
      <div>
        <CreateJobVacancy
          inputJob={inputJob}
          setInputJob={setInputJob}
          ChangeInputJobHandler={ChangeInputJobHandler}
          HandleAddJob={HandleAddJob}
          HandleEditJob={HandleEditJob}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CreateJobVacancyPage;
