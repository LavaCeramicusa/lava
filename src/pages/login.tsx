import React, { useRef } from 'react';
import Button from 'components/comon/Button';
import TextField from 'components/comon/TextField';

const Login = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    const username = userRef.current?.value;
    const password = passRef.current?.value;

    console.log('1', username);
    if (!!username && !!password) {
      console.log('login');
    }
  };

  return (
    <div className='min-h-screen bg-red-100 px-5 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 bg-[url("../assets/bg-login.jpg")] bg-cover bg-no-repeat'>
      <form className='mx-auto bg-white pt-10 pb-20 px-10 rounded-xl'>
        <h3 className='mb-8 text-2xl uppercase tracking-wider italic text-red-500 font-black'>
          Beauty Smile
        </h3>
        <TextField label='Username' variant='outlined' ref={userRef} />
        <TextField
          type='password'
          label='Password'
          variant='outlined'
          className='mt-3 mb-5'
          ref={passRef}
        />
        <Button
          type='button'
          className='w-full justify-center capitalize tracking-wide'
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
