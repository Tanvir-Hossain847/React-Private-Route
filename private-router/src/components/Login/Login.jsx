import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {


    const {signIn} = use(AuthContext);


    const handleSignIn = (event) =>{
      event.preventDefault()
      const email = event.target.email.value
      const password = event.target.password.value
      console.log(email, password);
      
      signIn(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
    }
     

    return (
       <div className="hero bg-gray-700 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-gray-900 w-full min-w-md shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='font-bold text-3xl text-center text-white'>Please Login</h1>
        <form className='' onSubmit={handleSignIn}>
            <fieldset className="fieldset">
          <label className="label text-white">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="label text-white">Password</label>
          <input name='password' type="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover text-white">Forgot password?</a></div>
          <button className="btn bg-white text-black btn-neutral mt-4">Login</button>
        </fieldset>
        <h3 className='text-center'></h3>
        </form>
        <h3 className='text-white'>Don't have an Account? <Link className='text-blue-700' to={'/register'}>Register</Link> now</h3>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;