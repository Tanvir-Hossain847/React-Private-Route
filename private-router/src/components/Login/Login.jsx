import React from 'react';
import { Link } from 'react-router';

const Login = () => {

        const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password);
    }

    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full min-w-md shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='font-bold text-3xl text-center'>Please Login</h1>
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <h3>Don't have an Account? <Link className='text-blue-700' to={'/register'}>Register</Link> now</h3>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;