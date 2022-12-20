import React from 'react'
import {Outlet} from 'react-router-dom'

const HomeTemplate = () => {
  return (
    <>
      <header className="bg-dark p-1 text-center display-4">Header</header>
      <section className="content" style={{minHeight:'75vh'}}>
        <Outlet />
      </section>
      <footer className="bg-dark p-5 text-center display-4">Footer</footer>
    </>
  );
}

export default HomeTemplate