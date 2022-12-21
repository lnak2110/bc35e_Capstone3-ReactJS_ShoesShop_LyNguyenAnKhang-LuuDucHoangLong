import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../../assets/scss/components/Footer/Footer';
import Header from '../../assets/scss/components/Header/Header';

const HomeTemplate = () => {
  return (
    <>
      <Header/>
      <section className="content" style={{minHeight:'70vh'}}>
        <Outlet />
      </section>
      <Footer/>
    </>
  );
}

export default HomeTemplate