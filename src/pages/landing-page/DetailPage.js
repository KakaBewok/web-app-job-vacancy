/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useParams } from 'react-router-dom';
import { getJob } from '../../utils/api-data';
import CardDetail from '../../components/detail/CardDetail';
import NavigationBar from '../../components/landing-page/Navbar';
import Footer from '../../components/landing-page/Footer';

const CardDetailPage = () => {
  const { id } = useParams();

  const { job, setJob } = useContext(GlobalContext);

  useEffect(() => {
    const FetchDatabyId = async () => {
      const { data } = await getJob(id);
      setJob(data.data);
    };

    FetchDatabyId();
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavigationBar />
      </div>
      <div className="pt-32 pb-10 dark:bg-gray-600 ">
        <CardDetail job={job} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CardDetailPage;
