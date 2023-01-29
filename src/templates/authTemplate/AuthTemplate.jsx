import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const AuthTemplate = () => {
  const { userLogin } = useSelector((state) => state.userReducer);

  if (userLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <section className="content" style={{ minHeight: '65vh' }}>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default AuthTemplate;
