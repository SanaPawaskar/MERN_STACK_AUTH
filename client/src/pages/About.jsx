import {} from 'react'


export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>About</h1>
      <p className='mb-4 text-slate-700'>
      My application utilizes the MERN stack, comprising MongoDB, Express, React, and Node.js, to deliver a robust authentication system. 
      <br></br>Users can register, authenticate, and securely access restricted areas of the application. <br></br>
      <b>The system incorporates the following features:</b>
      <br></br>

Registration: Users can create accounts with unique credentials.<br></br>
Authentication: Credential verification and token issuance for secure access.<br></br>
Session Management: Includes secure log-out functionality.<br></br>
Access Control: Protected routes ensure only authenticated users can access sensitive information.<br></br>
      </p>
      <p className='mb-4 text-slate-700'>
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON Web Tokens (JWT).
          <br></br> This template can also be used for other projects!
      </p>
    </div>
  );
}
