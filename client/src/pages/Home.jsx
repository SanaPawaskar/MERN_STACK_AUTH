import {} from 'react'
export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to my Authorization App!
      </h1>
      <p className='mb-4 text-slate-700'>
        This is a full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It includes authentication features that
        allow users to sign up, log in, and log out, and provides access to
        protected routes only for authenticated users.
      </p>
      <p className='mb-4 text-slate-700'>
      My MERN stack application features a sophisticated architecture to ensure seamless user interactions and secure data handling. The front-end, built with React and managed by React Router, provides a dynamic and responsive user experience. On the server side, Node.js and Express deliver high performance and scalability. MongoDB serves as our flexible and powerful database, while JSON Web Tokens (JWT) handle secure authentication, ensuring that only authorized users can access protected resources.
      </p>
    </div>
  );
}
