import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'https://dev-example.sanbercloud.com/api';
// const BASE_URL = 'job-vacancy.json';

// GET, CREATE & REMOVE TOKEN
const getAccessToken = () => {
  return Cookies.get('accessToken');
};
const putAccessToken = (accessToken) => {
  return Cookies.set('accessToken', accessToken);
};
const deleteAccessToken = () => {
  return Cookies.remove('accessToken');
};

// SIGNUP, LOGIN & CHANGE PASSWORD
const login = async ({ email, password }) => {
  const response = await axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });

  if (response.code === 400) {
    alert(response.error);
    return { error: true, data: null };
  }

  return { error: false, data: response };
};
const register = async ({ name, image_url, email, password }) => {
  const response = await axios.post(`${BASE_URL}/register`, {
    name,
    image_url,
    email,
    password,
  });

  if (response.code === 400) {
    return { error: true };
  }

  return { error: false, data: response };
};
const changePassword = async ({
  current_password,
  new_password,
  new_confirm_password,
}) => {
  const response = await axios.post(`${BASE_URL}/change-password`, {
    current_password,
    new_password,
    new_confirm_password,
  });

  if (response.code === 400) {
    return alert(`The current password is match with old password.`);
  }

  return alert(response);
};

//CRUD JOB VACANCY

// CREATE
const addJob = async ({
  title,
  job_description,
  job_qualification,
  job_type,
  job_tenure,
  job_status,
  company_name,
  company_image_url,
  company_city,
  salary_min,
  salary_max,
}) => {
  const response = await axios.post(
    `${BASE_URL}/job-vacancy`,
    {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    },
    {
      headers: {
        Authorization: 'Bearer ' + Cookies.get('accessToken'),
      },
    }
  );

  if (response.code === 400) {
    return { error: true, data: null };
  }

  return { error: false, data: response };
};
// READ ALL
const getAllJob = async () => {
  const response = await axios.get(`${BASE_URL}/job-vacancy`);

  if (response === 404) {
    return { error: true, data: null };
  }

  return { error: false, data: response.data };
};
// READ BY ID
const getJob = async (id) => {
  const response = await axios.get(`${BASE_URL}/job-vacancy/${id}`);

  if (response === 404) {
    return { error: true, data: null };
  }

  return { error: false, data: response };
};
// UPDATE
// --------------------------------
// DELETE
const deleteJob = async (id) => {
  const response = await axios.delete(`${BASE_URL}/job-vacancy/${id}`);

  if (response === 404) {
    return { error: true, data: null };
  }

  return { error: false, data: response };
};

export {
  getAccessToken,
  putAccessToken,
  deleteAccessToken,
  login,
  register,
  changePassword,
  addJob,
  getAllJob,
  getJob,
  deleteJob,
};
