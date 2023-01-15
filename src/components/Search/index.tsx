import React from 'react';
import Button from '../comon/Button';

const Search = () => {
  return (
    <section className='flex flex-col bg-red-400 p-20'>
      <div className='flex items-center justify-center gap-2'>
        <input
          type='text'
          className='inline-block h-10 w-64 relative px-5 pb-0.5 outline-none rounded-full'
          placeholder='Input code'
        />
        <Button className='h-10 outline-none w-24 justify-center pb-[10px]'>
          Search
        </Button>
      </div>
      <div className='flex items-center justify-center gap-2 mt-3'>
        <input
          type='text'
          className='inline-block h-10 w-64 relative px-5 pb-0.5 outline-none rounded-full'
          placeholder='Input your name'
        />
        <Button className='h-10 outline-none w-24 justify-center'>
          Active
        </Button>
      </div>
    </section>
  );
};

export default Search;
